var config = require('./../config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var Q = require('q');
var mongo = require('mongoskin');
var QrCode = require('qrcode-reader');
ObjectID = require('mongoskin').ObjectID;
var db = mongo.db(config.connectionString, {
    native_parser: true
});
db.bind('objects');
db.bind('users');

var service = {};

service.getAll = getAll;
service.getAllWithHistory = getAllWithHistory;
service.getAllShared = getAllShared;
service.getById = getById;
service.create = create;
// service.update = update;
service.share = share;
service.unShare = unShare;
service.delete = _delete;
service.updateOwnerByQr = updateOwnerByQr;
service.updateOwnerByPassphrase = updateOwnerByPassphrase;
module.exports = service;


function getAll(authorization) {
    var deferred = Q.defer();
    var auth = authorization.split(' ')[1];
    var decoded;
    try {
        decoded = jwt.verify(auth, config.secret);
    } catch (e) {
        console.log('Unathorized', decoded);
    }
    var userId = decoded.sub;
    db.users.findById(userId, function(err, user) {
        if (user && user.isAdmin) {
            db.objects.find().toArray(function(err, objects) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve(objects);
            });
        } else if (user) {
            db.objects.find({
                currentOwner: userId
            }).toArray(function(err, objects) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                objects.forEach(function(obj) {
                    obj.currentOwner = user;
                });
                deferred.resolve(objects);
            });
        } else {
            deferred.reject('Brak właściciela!');
        }
    });
    return deferred.promise;
}

function getAllWithHistory(authorization) {
    var deferred = Q.defer();
    var auth = authorization.split(' ')[1];
    var decoded;
    try {
        decoded = jwt.verify(auth, config.secret);
    } catch (e) {
        console.log('Unathorized', decoded);
    }
    var userId = decoded.sub;
    db.users.findById(userId, function(err, user) {
        if (user) {
            db.objects.find({
                "ownersList.user": userId
            }).toArray(function(err, objects) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                var returnObj = [];
                objects.forEach(function(obj) {
                    if (obj.currentOwner != userId)
                        returnObj.push(obj);
                });
                console.log(returnObj);
                deferred.resolve(returnObj);
            });
        } else {
            deferred.reject('Brak właściciela!');
        }
    });


    return deferred.promise;
}

function getAllShared(authorization) {
    var deferred = Q.defer();
    var auth = authorization.split(' ')[1];
    var decoded;
    try {
        decoded = jwt.verify(auth, config.secret);
    } catch (e) {
        console.log('Unathorized', decoded);
    }
    db.objects.find({
        shared: true
    }).toArray(function(err, objects) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (objects) {
            var returnObj = 0;
            objects.forEach(function(obj) {
                db.users.findById(obj.currentOwner, function(err, owner) {
                    obj.currentOwner = owner;
                    returnObj++;
                    resolve();
                });
            });
            resolve = function() {
                if (returnObj == objects.length) {
                    deferred.resolve(objects);
                }
            }
        }
    });
    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.objects.findById(_id, function(err, object) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (object) {
            var array = [];
            object.ownersList.forEach(function(obj) {
                array.push(new ObjectID(obj.user));
            });

            db.users.find({
                _id: {
                    $in: array
                }
            }).toArray(function(err, owners) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                object.ownersList.forEach(function(obj) {
                    owners.forEach(function(own) {
                        if (obj.user == own._id) {
                            obj.user = own;
                        }
                    });
                });
                deferred.resolve(object);
            })

        } else {
            // object not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(objectParam) {
    var deferred = Q.defer();

    // validation
    db.objects.findOne({
            name: objectParam.name
        },
        function(err, object) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (object) {
                // objectname already exists
                deferred.reject('Obiekt "' + objectParam.name + '" już istnieje!');
            } else {
                createobject();
            }
        });

    function createobject() {
        var object = objectParam
        object.shared = false;
        db.objects.insert(
            object,
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

// function update(_id, objectParam) {
//     var deferred = Q.defer();

//     // validation
//     db.objects.findById(_id, function(err, object) {
//         if (err) deferred.reject(err.name + ': ' + err.message);

//         if (object && object.name !== objectParam.name) {
//             // objectname has changed so check if the new objectname is already taken
//             db.objects.findOne({
//                     name: objectParam.name
//                 },
//                 function(err, object) {
//                     if (err) deferred.reject(err.name + ': ' + err.message);

//                     if (object) {
//                         // object name already exists
//                         deferred.reject('Obiekt "' + object.name + '" już istnieje!')
//                     } else {
//                         updateobject();
//                     }
//                 });
//         } else {
//             updateObject();
//         }
//     });

//     function updateObject() {
//         // fields to update
//         var set = {
//             name: objectParam.name,
//             description: objectParam.description,
//             currentOwner: objectParam.currentOwner,
//             ownersList: objectParam.ownersList,
//         };


//         db.objects.update({
//                 _id: new ObjectID(_id)
//             }, {
//                 $set: set
//             },
//             function(err, doc) {
//                 if (err) deferred.reject(err.name + ': ' + err.message);

//                 deferred.resolve();
//             });
//     }

//     return deferred.promise;
// }
function share(authorization, objectId) {
    var deferred = Q.defer();
    var auth = authorization.split(' ')[1];
    var decoded;
    try {
        decoded = jwt.verify(auth, config.secret);
    } catch (e) {
        console.log('Unathorized', decoded);
    }
    var userId = decoded.sub;
    db.objects.findById(objectId, function(err, object) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (!object) {
            deferred.reject('Nie ma takiego obiektu!');
        } else {
            updateObjectShared(object);
        }
    });

    function updateObjectShared(object) {
        var set = {
            shared: true
        };
        db.objects.update({
                _id: new ObjectID(object._id)
            }, {
                $set: set
            },
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }
    return deferred.promise;
}

function unShare(authorization, objectId) {
    var deferred = Q.defer();
    var auth = authorization.split(' ')[1];
    var decoded;
    try {
        decoded = jwt.verify(auth, config.secret);
    } catch (e) {
        console.log('Unathorized', decoded);
    }
    var userId = decoded.sub;
    db.objects.findById(objectId, function(err, object) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (!object) {
            deferred.reject('Nie ma takiego obiektu!');
        } else {
            updateObjectUnShared(object);
        }
    });

    function updateObjectUnShared(object) {
        var set = {
            shared: false
        };
        db.objects.update({
                _id: new ObjectID(object._id)
            }, {
                $set: set
            },
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                deferred.resolve();
            });
    }
    return deferred.promise;
}

function updateOwnerByQr(authorization, objectParam) {
    var deferred = Q.defer();
    var auth = authorization.split(' ')[1];
    var decoded;
    try {
        decoded = jwt.verify(auth, config.secret);
    } catch (e) {
        console.log('Unathorized', decoded);
    }
    var userId = decoded.sub;

    db.objects.findOne({
        qrCode: objectParam.qrCodeString
    }, function(err, object) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        updateObjectOwner(object);
    });

    function updateObjectOwner(object) {
        var date = new Date();
        var ownersListToUpdate = object.ownersList;
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        ownersListToUpdate.push({
            user: userId,
            time: date.getDate() + "-" + (date.getMonth() * 1 + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + minutes
        })
        var set = {
            currentOwner: userId,
            ownersList: ownersListToUpdate
        };


        db.objects.update({
                _id: new ObjectID(object._id)
            }, {
                $set: set
            },
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function updateOwnerByPassphrase(authorization, objectParam) {
    var deferred = Q.defer();
    var auth = authorization.split(' ')[1];
    var decoded;
    try {
        decoded = jwt.verify(auth, config.secret);
    } catch (e) {
        console.log('Unathorized', decoded);
    }
    var userId = decoded.sub;
    db.objects.findOne({
        passphraseFind: objectParam.passphrase
    }, function(err, object) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (!object) {
            deferred.reject('Podana fraza jest błędna lub nie ma takiego obiektu!');
        } else {
            updateObjectOwner(object);
        }
    });

    function updateObjectOwner(object) {
        var date = new Date();
        var ownersListToUpdate = object.ownersList;
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        ownersListToUpdate.push({
            user: userId,
            time: date.getDate() + "-" + (date.getMonth() * 1 + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + minutes
        })
        var set = {
            currentOwner: userId,
            ownersList: ownersListToUpdate
        };


        db.objects.update({
                _id: new ObjectID(object._id)
            }, {
                $set: set
            },
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.objects.removeById(_id,
        function(err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}
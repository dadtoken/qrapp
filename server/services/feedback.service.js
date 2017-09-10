var config = require('./../config.json');
var words = require('./../words.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var Q = require('q');
var mongo = require('mongoskin');
var QrCode = require('qrcode-reader');
ObjectID = require('mongoskin').ObjectID;
var db = mongo.db(config.connectionString, {
    native_parser: true
});
db.bind('users');
db.bind('feedback');
var service = {};

service.getAll = getAll;
service.create = create;

module.exports = service;

function getAll(authorization) {
    var deferred = Q.defer();
    var auth = authorization.split(' ')[1];
    var decoded;
    try {
        decoded = jwt.verify(auth, config.secret);
    } catch (e) {
        console.log('Unauthorized', decoded);
    }
    var userId = decoded.sub;
    db.users.findById(userId, function(err, user) {
        if (user && user.isAdmin) {
            db.feedback.find().toArray(function(err, feedbackList) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve(feedbackList);
            });
        } else {
            deferred.reject('Brak dostępu!');
        }
    });
    return deferred.promise;
}

function create(authorization, feedback) {
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
            feedback.user = user;
            db.feedback.insert(
                feedback,
                function(err, doc) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
                    deferred.resolve();
                });
        } else {
            deferred.reject('Brak użytkownika!');
        }
    });
    return deferred.promise;
}
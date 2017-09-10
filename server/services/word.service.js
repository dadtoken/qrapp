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
var service = {};

service.getTwelve = getTwelve;

module.exports = service;


function getTwelve(authorization) {
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
            var randomWords = [];
            for (var i = 0; i < 12; i++) {
                var rand = Math.floor((Math.random() * 2825560) + 1);
                randomWords.push(words.polish[rand]);
            }
            deferred.resolve(randomWords);
        } else {
            deferred.reject('Brak użytkownika!');
        }
    });
    return deferred.promise;
}
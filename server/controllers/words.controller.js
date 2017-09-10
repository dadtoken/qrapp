var config = require('./../config.json');
var express = require('express');
var router = express.Router();
var wordService = require('./../services/word.service');

// routes
router.get('/', getTwelve);

module.exports = router;


function getTwelve(req, res) {
    if (req.headers && req.headers.authorization) {
        wordService.getTwelve(req.headers.authorization)
            .then(function(words) {
                res.send(words);
            })
            .catch(function(err) {
                res.status(400).send(err);
            });
    } else {
        res.status(403).send("Unathorized!");
    }
}
var config = require('./../config.json');
var express = require('express');
var router = express.Router();
var feedbackService = require('./../services/feedback.service');

// routes
router.get('/', getAll);
router.post('/add', create);

module.exports = router;


function getAll(req, res) {
    if (req.headers && req.headers.authorization) {
        feedbackService.getAll(req.headers.authorization)
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

function create(req, res) {
    feedbackService.create(req.headers.authorization, req.body)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}
var config = require('./../config.json');
var express = require('express');
var router = express.Router();
var objectService = require('./../services/object.service');

// routes
router.post('/add', add);
router.get('/', getAll);
router.get('/withHistory', getAllWithHistory);
router.get('/allShared', getAllShared);
router.get('/:_id', getById)
router.put('/share/:_id', share);
router.put('/unShare/:_id', unShare);
router.put('/', updateOwnerByQr);
router.put('/passphrase', updateOwnerByPassphrase);
router.delete('/:_id', _delete);

module.exports = router;

function add(req, res) {
    objectService.create(req.body)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    if (req.headers && req.headers.authorization) {
        objectService.getAll(req.headers.authorization)
            .then(function(objects) {
                res.send(objects);
            })
            .catch(function(err) {
                res.status(400).send(err);
            });
    } else {
        res.status(403).send("Unathorized!");
    }
}

function getAllWithHistory(req, res) {
    if (req.headers && req.headers.authorization) {
        objectService.getAllWithHistory(req.headers.authorization)
            .then(function(objects) {
                res.send(objects);
            })
            .catch(function(err) {
                res.status(400).send(err);
            });
    } else {
        res.status(403).send("Unathorized!");
    }
}

function getAllShared(req, res) {
    if (req.headers && req.headers.authorization) {
        objectService.getAllShared(req.headers.authorization)
            .then(function(objects) {
                res.send(objects);
            })
            .catch(function(err) {
                res.status(400).send(err);
            });
    } else {
        res.status(403).send("Unathorized!");
    }
}

function getById(req, res) {
    objectService.getById(req.params._id)
        .then(function(object) {
            if (object) {
                res.send(object);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}

// function update(req, res) {
//     objectService.update(req.params._id, req.body)
//         .then(function() {
//             res.sendStatus(200);
//         })
//         .catch(function(err) {
//             res.status(400).send(err);
//         });
// }
function share(req, res) {
    if (req.headers && req.headers.authorization) {
        objectService.share(req.headers.authorization, req.params._id)
            .then(function() {
                res.sendStatus(200);
            })
            .catch(function(err) {
                res.status(400).send(err);
            });
    } else {
        res.status(401).send("Unathorized!");
    }
}

function unShare(req, res) {
    if (req.headers && req.headers.authorization) {
        objectService.unShare(req.headers.authorization, req.params._id)
            .then(function() {
                res.sendStatus(200);
            })
            .catch(function(err) {
                res.status(400).send(err);
            });
    } else {
        res.status(401).send("Unathorized!");
    }
}

function updateOwnerByQr(req, res) {
    if (req.headers && req.headers.authorization) {
        objectService.updateOwnerByQr(req.headers.authorization, req.body)
            .then(function() {
                res.sendStatus(200);
            })
            .catch(function(err) {
                res.status(400).send(err);
            });
    } else {
        res.status(401).send("Unathorized!");
    }
}

function updateOwnerByPassphrase(req, res) {
    if (req.headers && req.headers.authorization) {
        objectService.updateOwnerByPassphrase(req.headers.authorization, req.body)
            .then(function() {
                res.sendStatus(200);
            })
            .catch(function(err) {
                res.status(400).send(err);
            });
    } else {
        res.status(401).send("Unathorized!");
    }
}

function _delete(req, res) {
    objectService.delete(req.params._id)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(err) {
            res.status(400).send(err);
        });
}
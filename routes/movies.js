var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/movies', ['movies']);
var db1 = mongojs('mongodb://localhost:27017/movies', ['rooms']);

// Save code
router.post('/code', function(req, res, next) {
    db.code.save({code:req.body.code, room: req.body.room, date: req.body.date}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
    
});

// Get MOVIES
router.get('/getMovies', function(req, res, next) {
    db.movie.find(function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
});
 
// Get rooms
router.get('/getRooms', function(req, res, next) {
    db1.rooms.find( function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
});

// Get attendance
router.get('/getAttendance', function(req, res, next) {
    db.code.find({room:req.query.room}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
});

// Get total attendance
router.get('/getTotalAttendence', function(req, res, next) {
    db.code.find(function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
});

module.exports = router;
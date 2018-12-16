var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/movies', ['user']);

// Get login
router.get('/login', function(req, res, next) {
    db.user.findOne({email:req.query.email, password:req.query.password}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
    
});

// Register
router.post('/register', function(req, res, next) {
    db.user.save({email:req.body.email, password:req.body.password, role: 1}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
    
});

// Add new movie
router.post('/add', function(req, res, next) {
    db.movie.save({name:req.body.name, genere:req.body.genere, duration: req.body.duration, rating: req.body.rating}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
    
});

// Update movie
router.put('/update', function(req, res, next) {
    db.movie.update({id:req.body.movie.id}, {name:req.body.movie.name, genere:req.body.movie.genere, duration: req.body.movie.duration, rating: req.body.movie.rating}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
    
});
// Delete movie
router.post('/delete', function(req, res, next) {
    db.movie.remove({ _id : req.body._id }, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
    
});
 
module.exports = router;
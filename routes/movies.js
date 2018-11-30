var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/movies', ['movies']);

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


module.exports = router;
'use strict';
var mongoose = require('mongoose');


var moviesModel = function(){
    var movieSchema = mongoose.Schema({
        title : String,
        genre : String,
        plot : String,
        director : String,
        release_date : Date,
        trailer : String,
        cover : String
    });

    return mongoose.model('Movies', movieSchema);
}

module.exports = new moviesModel();

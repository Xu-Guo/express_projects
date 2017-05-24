const mongoose = require('mongoose');

//Category Schema
const categorySchema = mongoose.Schema({
    title : {
        type : String
    },
    description : {
        type : String
    }
});

const Category = module.exports = mongoose.model('Category', categorySchema);

//Get Categories
module.exports.getCategories = function(callback, limit){
    Category.find(callback).limit(limit).sort([['title', 'ascending']]);
}

//add Category
module.exports.addCategory = function(category, callback){
    Category.create(category, callback);
}

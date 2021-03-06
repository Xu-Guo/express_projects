const mongoose = require('mongoose');

//Article Schema
const articleSchema = mongoose.Schema({
    title : {
        type : String
    },
    subtitle : {
        type : String
    },
    category : {
        type : String
    },
    body : {
        type : String
    },
    author : {
        type : String
    },
    created_at : {
        type : Date,
        default : Date.now()
    },
    comments:[{
        comment_subject : {
            type : String
        },
        comment_body : {
            type : String
        },
        comment_author : {
            type : String
        },
        comment_email : {
            type : String
        },
        comment_date : {
            type : String
            // default : Date.now
        }
    }]
});

const Article = module.exports = mongoose.model('Article', articleSchema);

//Get Articles
module.exports.getArticles = function(callback, limit){
    Article.find(callback).limit(limit).sort([['title', 'ascending']]);
}

//Get articles by category
module.exports.getArticlesByCategory = function(categoryId, callback){
    let query = {
        category : categoryId
    }
    Article.find(query, callback).sort([['title', 'ascending']]);
}

//add Article
module.exports.addArticle = function(article, callback){
    Article.create(article, callback);
}

//get one Article by id
module.exports.getArticleById = function(id, callback){
    Article.findById(id, callback);
}

//update Article
module.exports.updateArticle = function(query, update, options, callback){
    Article.findOneAndUpdate(query, update, options, callback);
}

//delete Article
module.exports.removeArticle = function(query, callback){
    Article.remove(query, callback);
}

//Add comment
module.exports.addComment = function(query, comment, callback){
    Article.update(query,
        {
            $push : {
                comments : comment
            }
        },
        callback
    );
}

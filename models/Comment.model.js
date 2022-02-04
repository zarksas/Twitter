const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    
    text: String,
  
    post: {
        ref: "Post",
        type: mongoose.SchemaTypes.ObjectId
    }
})



const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
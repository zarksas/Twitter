
const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    user: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    like: [{
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    }],

    text: String,
   
})



const Post = mongoose.model('Post', postSchema);
module.exports = Post;
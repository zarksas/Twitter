const Post = require('../models/Post.model');

module.exports.postsControllers = {
    createPost: async(req, res) => {
        const {user, like, text} = req.body;
        const posts = await Post.create({
            user: user,
            like: like,
            text: text
        })
        res.json(posts)
    },

    deletePostById: async(req, res) => {
        await Post.findByIdAndRemove(req.params.id)
    },

    patchLikePost: async(req, res) => {
        const { like } = req.body;
        const posts = await Post.findByIdAndUpdate(req.params.id, {
            $push : {like: like},
           
        })
        res.json('created like')
    },

    getPosts: async(req, res) => {
        const posts = await Post.find();
        res.json(posts)
    }
}
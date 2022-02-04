const Comment = require('../models/Comment.model');


module.exports.commentsControllers = {
    postComment: async(req, res) => {
        const { user, text, post } = req.body;
        const comm = await Comment.create({
            user : user,
            text: text,
            post: post
        })
        res.json(comm)
    },

    deleteCommentById: async(req, res) => {
        await Comment.findByIdAndRemove(req.params.id)
    },

    patchCommentById: async(req, res) => {
        const { user, text, post } = req.body;
        const comm =  await Comment.findByIdAndUpdate(req.params.id, {
            user: user,
            text: text,
            post: post
        })
        res.json(comm)
    }
}
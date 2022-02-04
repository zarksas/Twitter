const User = require('../models/User.model');

module.exports.usersControllers = {
    postUser: async(req, res) => {
        const {name, saves } = req.body;
        await User.create({ 
            name, 
            saves
        })
        res.json('created')
    },

    patchSavesById: async(req, res) => {
        const { name, saves } = req.body;
        await User.findByIdAndUpdate(req.params.id, {
            name,
            $push: {saves: saves}

        })
        res.json('update')
    },

    deleteUserById: async(req, res) => {
        await User.findByIdAndRemove(req.params.id);
        res.json('user remove by id:' + req.params.id)
    }
}
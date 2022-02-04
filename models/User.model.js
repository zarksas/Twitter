const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: String,
    saves: [{
         ref: "Post",
         type: mongoose.SchemaTypes.ObjectId,
     }]
})



const User = mongoose.model('User', userSchema);
module.exports = User;
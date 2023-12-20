const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema({
    username : {
        type: String,
        required:true
    },
    email : {
        type: String,
        required: true
    },
    password: {
        type:String,
        requried: true
    },
    age:{
        type: Number,
    },
    gender: {
        type: String
    },
    dob : {
        type: String
    },
    mobile : {
        type: String
    }
})

module.exports = mongoose.model('User',UserSchema);
const mongoose = require('mongoose');

const Schemas = mongoose.Schema;

const UserModel = Schemas({
    
    profile : {
        type : String,
        default : ""
    },

    firstName : {
        type : String,
        default : "",
    },
    
    lastName : {
        type : String,
        default : "",
    },
    
    email : {
        type : String,
        default : "",
    },
    
    password : {
        type : String,
        default : "",
    },
    
    mobile : {
        type : String,
        default : "",
    },
    
    address : {
        type : String,
        default : "",
    },
});

const User = mongoose.model('User', UserModel);
module.exports = {User};
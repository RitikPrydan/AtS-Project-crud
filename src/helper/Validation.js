const joi = require('@hapi/joi');

const UserValidation = joi.object({
    profile : joi.string(),
    firstName : joi.string(),
    lastName : joi.string(),
    email :joi.string().email(),
    password : joi.string(),
    mobile : joi.string(),
    address : joi.string(),
});

module.exports = { UserValidation };
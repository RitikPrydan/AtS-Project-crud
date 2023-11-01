const joi = require('@hapi/joi');

const UserValidation = joi.object({
    profile : joi.string().required(),
    firstName : joi.string().required(),
    lastName : joi.string().required(),
    email :joi.string().email().required(),
    password : joi.string().required(),
    mobile : joi.string().required(),
    address : joi.string().required(),
});

module.exports = { UserValidation };
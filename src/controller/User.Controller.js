const { User } = require('../models/User.Model');
const { UserValidation } = require('../helper/Validation');
require('../helper/imgUpload')
// const { any } = require('@hapi/joi');

const addUser = async (req,res,next) => {
    try {
        var img = 'http://localhost:4000/user/src/img/profile'+req.file.filename;
        const validateUser = await UserValidation.validateAsync(req.body);
        const createUser = new User({
            profile :img ,
            firstName : validateUser.firstName,
            lastName : validateUser.lastName,
            email : validateUser.email,
            password : validateUser.password,
            mobile : validateUser.mobile,
            address : validateUser.address
        });
        const newUser = await createUser.save();
        res.status(201).json({newUser,message:"Added Sucessfully"})
    } catch (err) {
        next(err);
    }
}

const getUser = async (req,res,next) => {
    try {
        const usersData = await User.find();
        res.json({usersData});
    } catch (error) {
        res.send(error)
    }
}

const getSingleUser = async (req,res,next) => {
    try {
        const id = req.params.id;
        const userData = await User.findById(id);
        if(userData){
            res.send(userData);
        }else{
            return res.status(404).send();
        }
    } catch (error) {
        res.send(error)
    }
};

const updateUser = async (req,res,next) => {
    try {
        // var img = 'http://localhost:4000/user/src/img/profile'+req.file.filename;
        const validateUser = await UserValidation.validateAsync(req.body);
        const id = req.params.id;
        let img
        if(req.file){
             img = 'http://localhost:4000/user/src/img/profile'+req.file.filename;
        }else{
            const existingUser = await User.findById(id);
            img = existingUser.profile;
        }
        const editUser = await User.findByIdAndUpdate(
            id,
            {
                $set : {
                    profile :img,
                    firstName : validateUser.firstName,
                    lastName : validateUser.lastName,
                    email : validateUser.email,
                    password : validateUser.password,
                    mobile : validateUser.mobile,
                    address : validateUser.address
                },
            },
            { new : true })
            //editUser["profile"] =  `http://localhost:4000/user/src/img/profile/${editUser.profile}`;
            if(editUser){
                res.json({editUser,message : "User Data successfully updated"});
            }else{
                res.json({message : "user is not found"})
            }
            console.log(updateUser);
    } catch (error) {
        res.status(404).send(error);
    }
};

const deleteUser = async (req,res,next) => {
    try {
        const id = req.params.id;
        const removeUser = await User.findByIdAndDelete(id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.json({removeUser,message:"user is not found"})
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = { addUser,getUser,getSingleUser,updateUser,deleteUser}
    

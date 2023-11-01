const express = require('express');
const router = express.Router();
const {getSingleUser, addUser, getUser, updateUser, deleteUser} = require('../controller/User.Controller');
const { userImgUpload } = require('../helper/imgUpload');


router.post('/user',userImgUpload, addUser);
router.get('/user' , getUser );
router.get('/user/:id', getSingleUser);
router.patch('/user/:id',userImgUpload,updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;
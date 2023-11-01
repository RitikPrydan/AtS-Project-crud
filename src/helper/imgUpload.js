const multer = require('multer');
const path = require('path');

const UserStorage = multer.diskStorage({
    destination : function (req,file,cb)
    {
         cb(null,'./src/IMG/profile')
    },
    filename : function (req,file,cb)
    {
         cb(null,file.originalname);
    }
});

var userImgUpload = multer({ storage : UserStorage }).single('profile');

module.exports = {userImgUpload};
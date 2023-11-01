const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0/UserDB')
.then( () => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});
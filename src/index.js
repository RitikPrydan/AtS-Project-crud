const express = require('express');
const bodyParser = require("body-parser");
const user = require('./routes/User.Route');
require('./helper/connection');
require("./models/User.Model")

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));
app.use(user)

app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`);
});
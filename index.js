const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const userRoutes = require("./routes/user-route")
require('dotenv').config();
const authMiddelware = require('./middelwares/authentication')
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port =  process.env.port || 5001;
const mongo_url = process.env.MONGO_URI;

app.use('/user', userRoutes);

mongoose.connect(mongo_url)
.then(() =>{
    app.listen(port, () => {
        console.log(`Server running on localhost:${port}`)
    })
})

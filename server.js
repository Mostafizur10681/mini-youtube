const express = require('express');
const router = require('./routes/videos');
const mongoose = require("mongoose");


// port = 5000
const port = process.env.PORT || 5000;
// express app
const app = express()

// middleware
app.use(express.json())
app.use('/videos', router)


// connect with DB
mongoose.connect('mongodb+srv://youtube123:9wy8rgCMnaM2cWl7@cluster0.psnsbml.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        app.listen(port, (req, res) => {
            console.log('Listing to port: ', port)
        })
    })
    .catch((error) => {
        console.log(error)
    })


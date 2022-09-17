const express = require('express');
const videosRoutes = require('./routes/videos');
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');



// port = 5000
const port = process.env.PORT || 5000;
// express app
const app = express()

// middleware
app.use(express.json())


// route
app.use("/videos", videosRoutes);
app.use("/user", userRoutes)


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


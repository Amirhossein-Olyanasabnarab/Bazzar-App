const mongoose = require("mongoose");
require("dotenv").config({quiet: true});
const DB_HOST = process.env.DB_HOST;

mongoose.connect(DB_HOST)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(`Connecting was failed, ${err.message}`);
    });
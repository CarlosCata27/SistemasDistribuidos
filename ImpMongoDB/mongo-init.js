"use strict";
const mongoose = require("mongoose");
const uri = "mongodb+srv://CarlosCata:CarlosKta2727@cluster0.7wpog.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri);

module.exports = mongoose;

require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.SECRET_KEY;
mongoose.connect(uri);

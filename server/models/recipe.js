const mongoose = require("mongoose");

const Recipe = mongoose.model("Recipe", {
    title: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
});

module.exports = Recipe;

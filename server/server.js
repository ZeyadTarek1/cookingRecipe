const express = require("express");
const Recipe = require("./models/recipe.js");
const fs = require("fs");
require("./db.js");

const app = express();
const port = 5000;

app.use(express.json());

app.post("/getrecipe", async (req, res) => {
    try {
        const recipe = new Recipe(req.body);
        await recipe.save();
        res.status(200).send(recipe);
        console.log(recipe);
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
});

try {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
} catch (e) {
    console.log(e);
}

const express = require("express");
const Recipe = require("./models/recipe.js");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
require("./db.js");

const fileStorage = multer.diskStorage({
    destination: (_req, _file, callbackf) => {
        callbackf(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },
});

const upload = multer({ storage: fileStorage });
const app = express();
const port = 5000;
const whitelist = ["http://localhost:3000"];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(express.json());
app.use(cors(corsOptions));

app.post("/getrecipe", upload.array("image", "data"), async (req, res) => {
    try {
        const fileName = req.files[0].filename;
        console.log("filename is ", fileName);
        let imgPath;
        if (process.env.NODE_ENV || "development") {
            imgPath = `http://localhost:5000/uploads/${fileName}`;
        } else {
            imgPath = __dirname + "\\uploads\\" + fileName;
        }
        const data = JSON.parse(req.body.data);
        const recipe = new Recipe({ ...data, image: imgPath });
        await recipe.save();
        console.log(recipe);
        res.status(200).send(recipe);
    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    }
});

app.get("/getRecipes", async (req, res) => {
    try {
        const data = await Recipe.find({});
        if (!data) {
            return res.status(404).send();
        }
        res.send(data);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get("/images", async (req, res) => {
    try {
        const image = fs.readFileSync(`./uploads/${req.body.image}`);
        if (!image) {
            return res.status(404).send();
        }
        res.send(image);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.delete("/recipes/:id", async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).send();
        }
        res.send(recipe);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.patch("/recipes/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        "title",
        "time",
        "ingredients",
        "instructions",
        "image",
    ];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid Operation" });
    }

    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!recipe) {
            return res.status(404).send();
        }
        res.send(recipe);
    } catch (e) {
        res.status(400).send(e);
    }
});

try {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
} catch (e) {
    console.log(e);
}

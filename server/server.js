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
        console.log(fileName);
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

app.get("/getRecipes", async (req, res) => {});

app.get("/images", async (req, res) => {
    const temp = fs.readFileSync(`./uploads/${req.body.image}`);
    res.send(temp);
});

try {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
} catch (e) {
    console.log(e);
}

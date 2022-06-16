const express = require("express");
const path = require("path");
require("./db/conn");
const hbs = require("hbs");
const schema = require("./models/userValidation");

const app = express();
const port = process.env.PORT || 8000;

// setting path
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// middleware
app.use(express.urlencoded({ extended: false })); //* imp
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath); //views folder will be at 'templatePath'
hbs.registerPartials(partialPath);

// routing
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/signin", async (req, res) => {
  try {
    const userData = new schema(req.body);
    await userData.save();
    res.status(201).render("index");
  } catch (e) {
    res.status(500).send(e);
  }
});

// creating server
app.listen(port, () => console.log(`app is listening on port ${port}!`));

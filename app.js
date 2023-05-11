const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
const Photo = require("./models/Photo");

const app = express();

//connect db
mongoose.connect("mongodb://localhost/pcat-test-db");

//template engine - conf
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
// body parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get("/", async (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
  const photos = await Photo.find({});
  res.render("index", {
    photos,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add", (req, res) => {
  res.render("add");
});

//the data that getting from form
app.post("/photos", async (req, res) => {
  console.log("req.body :>> ", req.body);
  await Photo.create(req.body); // send data to the database
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`listen this ${port} port`);
});

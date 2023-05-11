const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

//template engine - conf
app.set("view engine", "ejs");

//middlewares
app.use(express.static("public"));
  // body parser middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'))
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add", (req, res) => {
  res.render("add");
});

//the data that getting from form
app.post("/photos", (req, res) => {
  console.log('req.body :>> ', req.body);
  res.redirect("/")
});

const port = 3000;
app.listen(port, () => {
  console.log(`listen this ${port} port`);
});

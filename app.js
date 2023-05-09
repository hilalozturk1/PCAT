const express = require("express");

const app = express();

app.get("/", (req, res) => {
  let user = {
    name: "Hilal",
    lName: "Öztürk"
  }
  res.send(user)
})

const port = 3000;
app.listen(port, () => {
  console.log(`listen this ${port} port`);
});

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const categories = require("./Data/datas.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("News API Running");
});

app.get("/tech-categories", (req, res) => {
  res.send(categories);
});

app.get("/tech-categories/courseInfo/:id", (req, res) => {
  const mew = req.params.id;

  const courseInfo = categories.filter((x) => x.id === mew);
  res.send(courseInfo);
});

app.listen(port, () => {
  console.log("Server is running now at port", port);
});

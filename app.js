const express = require("express");
const cors = require("cors");
const app = express();
const { readFileOut, writeFileOut } = require("./fileCreator");
const { verifyLogin } = require("./verify");

app.use(cors());
app.use(express.json());

const delay = (req, res, next) => {
  setTimeout(next, 3000);
};

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});
app.get("/read/:id", (req, res) => {
  const fileName = req.query.fileName;
  const { userId } = req.params;
  const result = readFileOut(fileName);
  console.log(result);
  res.send(result);
});

app.post("/write", (req, res) => {
  console.log(req);
  const { key, value } = req.body;
  const fileName = req.query.fileName;
  console.log(`Received: ${req.query.fileName}`);
  const response = writeFileOut(fileName, key, value);
  res.status(200).send(response);
});

app.get("/verify", delay, (req, res) => {
  const { username, password } = req.query;
  res.send(verifyLogin(username, password));
});

app.all("*", (req, res) => {
  res.send("Page not found");
});

app.listen(5000);

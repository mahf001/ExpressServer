//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Express on Server is working.</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>Contact me: alihaider.2010@gmail.com</h1>");
});

app.get("/about", function (req, res) {
  res.send("<h1>Created by: Mohammed Ali Haider Farooqui. I love JS.</h1>");
});

app.get("/hobbies", function (req, res) {
  res.send("<h1>Evening Walk, Productivity Talks, Mind Management.</h1>");
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

const express = require("express");
const lotr = require("random-lotr-movie-quote");
const promptmaker = require("promptmaker");
const cors = require("cors");
const app = express();
const port = 3000;

const fJSON = (json) => JSON.stringify(json, null, 4);

app.get("/date", (req, res) => {
  res.send(new Date());
});

app.get("/lotr", (req, res) => {
  res.send(fJSON(lotr()));
});

app.get("/prompt", (req, res) => {
  res.send(fJSON(promptmaker()));
});

app.get("/color", async (req, res) => {
  const data = await fetch("https://www.colr.org/json/color/random");
  res.send(fJSON((await data.json()).colors));
});

app.use(cors());
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example HTMX + Express app listening on port ${port}`);
});

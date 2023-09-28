/*
  This Node.js code creates an Express server that exposes five APIs:

  * `/date`: Returns the current date and time.
  * `/lotr`: Returns a random quote from the Lord of the Rings movie.
  * `/prompt`: Returns a random prompt to generate an image via AI.
  * `/color`: Returns a random color from the Colr API.
  * `/new-content`: Returns a random variation of the philosopher Spinoza's name.
  
  The code also uses CORS to allow APIs to be accessed from any domain.
*/

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

app.get("/new-content", (req, res) => {
  let spinoza = [
    "Baruch Espinoza",
    "Baruch Spinoza",
    "Baruch Espinosa",
    "Baruch de Espinosa",
    "Benedictus de Spinoza",
    "Bento de Espinosa",
    "Benedito de Espinosa",
    "Spinoza",
    "Espinoza",
  ];
  res.send(spinoza[Math.floor(Math.random() * spinoza.length)]);
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

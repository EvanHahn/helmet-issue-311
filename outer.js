const express = require("express");
const path = require("path");

const app = express();

const OUTER_PAGE_PATH = path.join(__dirname, "outer_page.html");
app.get("/", (req, res) => {
  res.sendFile(OUTER_PAGE_PATH);
});

app.listen(3001);

const express = require("express");
const helmet = require("helmet");
const path = require("path");

const app = express();

app.use(helmet.frameguard({ action: "deny" }));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'none'"],
      styleSrc: ["'unsafe-inline'"],
      frameAncestors: ["'none'"],
    },
  })
);

const IFRAME_PATH = path.join(__dirname, "iframe.html");
app.get("/iframe", (req, res) => {
  res.sendFile(IFRAME_PATH);
});

app.listen(3000);

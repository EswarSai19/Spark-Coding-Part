const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.get("/api/contacts", (req, res) => {
  res.send("Set all contacts");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const guestsRouter = require('./routes/api/guests-routes');

const app = express();

app.use(cors()); 

app.use(express.json());

app.use("/api/guests", guestsRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

module.exports = app;

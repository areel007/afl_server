const express = require("express");
const morgan = require("morgan");
const { validate } = require("./composables/validator");

const app = express();

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

const authRoute = require("./routes/auth");

app.use("/api/v1/auth", validate, authRoute);

module.exports = app;

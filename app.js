const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { validate } = require("./composables/validator");

const app = express();

app.use(cors());

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

const authRoute = require("./routes/auth");
const newsRoute = require("./routes/news");
const areaRegisterRoute = require("./routes/area.register");
const testRoute = require("./routes/test");

app.use("/api/v1/auth", validate, authRoute);
app.use("/api/v1/news", newsRoute);
app.use("/api/v1/area-register", areaRegisterRoute);
app.use("/api/v1/test", testRoute);

module.exports = app;

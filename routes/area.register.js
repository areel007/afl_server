const express = require("express");

const router = express.Router();

const areaController = require("../controllers/area.register");

router
  .route("/")
  .post(areaController.createAreaRegister).get(areaController.getAreas)

module.exports = router;

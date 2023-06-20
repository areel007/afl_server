const mongoose = require("mongoose");

const areaSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "This field is required"],
  },
  lastname: {
    type: String,
    required: [true, "This field is required"],
  },
  email: {
    type: String,
    required: [true, "This field is required"]
  },
  phone: {
    type: String
  },
  area: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AreaRegister = mongoose.model("AreaRegister", areaSchema);

module.exports = AreaRegister;

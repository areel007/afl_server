const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "News must have a title"],
  },
  details: {
    type: String,
    required: [true, "News must have a detail"],
  },
  imageUrl: {
    type: String,
  },
  category: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const New = mongoose.model("New", newSchema);

module.exports = New;

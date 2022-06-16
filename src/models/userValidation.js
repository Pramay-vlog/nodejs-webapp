const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("Invalid name or Email");
      }
    },
  },
  phone: {
    type: Number,
    unique: true,
    required: true,
    min: 10,
  },
  message: {
    type: String,
    trim: true,
  },
});

//* make collection
const User = mongoose.model("User", userSchema);

module.exports = User;

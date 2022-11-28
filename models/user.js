const mongoose = require("mongoose");
const LoginuserSchema = new mongoose.Schema({
  userid: { type: Number, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  profession: { type: String, require: true, trim: true },
  about: { type: String, require: true, trim: true },
  skills: { type: Array, require: true, trim: true },
  experience1: { type: String, require: true, trim: true },
  experience2: { type: String, require: true, trim: true },
});
const UserModel = mongoose.model("loggedinuser", LoginuserSchema);
module.exports = UserModel;

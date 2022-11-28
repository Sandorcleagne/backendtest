const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegistration = async (req, res) => {
  const {
    userid,
    name,
    email,
    password,
    profession,
    about,
    skills,
    experience1,
    experience2,
  } = req.body;
  const checkEmail = await UserModel.findOne({ email: email });
  console.log("checkEmail", checkEmail);
  if (checkEmail) {
    res
      .status(200)
      .send({ status: 0, baseResponse: "User Email Already Exist" });
  } else {
    if (
      userid &&
      name &&
      email &&
      password &&
      profession &&
      about &&
      skills &&
      experience1 &&
      experience2
    ) {
      const doc = new UserModel({
        userid: userid,
        name: name,
        email: email,
        password: password,
        profession: profession,
        about: about,
        skills: skills,
        experience1: experience1,
        experience2: experience2,
      });
      await doc.save();
      res
        .status(200)
        .send({ status: 1, baseResponse: "Registerd Sucessfully" });
    } else {
      res
        .status(200)
        .send({ status: 0, baseResponse: "All Fields are required" });
    }
  }
};
const showUserData = async (req, res) => {
  const registerdUserData = await UserModel.find({}, { _id: 0, __v: 0 });
  if (registerdUserData) {
    console.log(registerdUserData);
    res.status(200).send({ status: 1, data: registerdUserData });
  } else {
    res.status(400).send({ status: 0, message: "No Data available" });
  }
};
const loginUser = async (req, res) => {
  console.log(req.body.email);
  const registerdUserData = await UserModel.findOne(
    { email: req.body.email },
    { _id: 0 }
  );
  console.log("registerdUserData", registerdUserData);

  if (registerdUserData !== null) {
    res.status(200).send({ status: 1, message: "User Logged in Sucessfully" });
  } else {
    res.status(200).send({ status: 0, message: "Failed to log in" });
  }
};
module.exports = { userRegistration, showUserData, loginUser };

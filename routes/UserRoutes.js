const express = require("express");
const {
  userRegistration,
  showUserData,
  loginUser,
} = require("../controller/UserController");
const router = express.Router();

router.post("/registration", userRegistration);
router.get("/userdata", showUserData);
router.post("/loggedindata", loginUser);

module.exports = router;

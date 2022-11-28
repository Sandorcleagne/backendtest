const mongoose = require("mongoose");
const connectdb = async (DATABASE_URL) => {
  try {
    const DB_OPTION = {
      dbname: "testdatabase",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTION);
    console.log("Connected Sucessfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectdb };

const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;
const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB CONNECTED");
  } catch (error) {
    console.log(URI);
    console.log("DB NOT CONNECTED");
    console.log(error);
  }
};

module.exports = ConnectDB;

import mongoose from "mongoose";

const ConnectDB = async() => {
  try {
            await mongoose.connect(import.meta.env.MONGODB_URI);
            console.log("DB CONNECTED");
  } catch (error) {
    console.log("DB NOT CONNECTED");
    console.log(error);
  }
};
export default ConnectDB;
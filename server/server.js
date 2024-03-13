require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/auth-router");
const ConnectDB = require("./utils/mongodb");
const cors = require("cors");
const PORT = 5000;

const corsOptions = {
  origin: "https://localhost:5173",
  method: "GET, POST, DELETE, PATCH, PUT, HEAD",
  credentials: true,
};
app.use(cors());
app.use(express.json());
app.use("/api", router);

mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port = ${PORT}`);
  });
});

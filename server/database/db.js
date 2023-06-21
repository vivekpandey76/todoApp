import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
  const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todoapp.wzlutiy.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
  mongoose.connection.on("connected", () => {
    console.log("Database is connected successfuly");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Database is disconnected");
  });
  mongoose.connection.on("error", () => {
    console.log("Error will connecting database");
  });
};

export default Connection;

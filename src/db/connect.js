import mongoose from "mongoose";
import config from "../config/config.js";

const {
  db: { uri },
} = config;

async function connect() {
  try {
    console.log(uri, "uri")
    await mongoose.connect(uri);
    console.log("Mongo is connected!");
  } catch (err) {
    throw new Error(err);
  }
}

export default connect;

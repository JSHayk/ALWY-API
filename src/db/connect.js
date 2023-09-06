import mongoose from "mongoose";
import config from "../config/config.js";

const {
  db: { uri },
} = config;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("DB is connected!");
  } catch (err) {
    throw new Error(err);
  }
}

export default connect;

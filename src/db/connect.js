import mongoose from "mongoose";
import config from "../config/config.js";

const {
  db: { uri },
} = config;

async function connect() {
  try {
    const uri = 'mongodb+srv://user:user@alwy.uderihq.mongodb.net/data?retryWrites=true&w=majority'
    await mongoose.connect(uri);
    console.log("Mongo is connected!");
  } catch (err) {
    throw new Error(err);
  }
}

export default connect;

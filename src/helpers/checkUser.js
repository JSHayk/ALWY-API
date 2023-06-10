import userModel from "../db/models/user.model.js";

export default async function checkUser(option, value) {
  try {
    const [user] = await userModel.find({email: value});
    return user;
  } catch (err) {
    throw new Error(err);
  }
}

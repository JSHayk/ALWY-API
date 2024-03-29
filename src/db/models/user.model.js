import { model, Schema } from "mongoose";

const schema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export default model("user", schema);

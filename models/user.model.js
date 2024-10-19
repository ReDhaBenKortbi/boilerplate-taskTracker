import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }
}, {collection: "users", versionKey:false})

export const UserModel = new mongoose.model("user", userSchema);
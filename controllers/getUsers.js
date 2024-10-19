import { UserModel } from "../models/user.model.js";

export async function getUsers(req, res) {
    try {
        let users = await UserModel.find({});
        return res.json(users)
    } catch (error) {
        // Handle errors and return a server error response
        console.error("Error creating exercise:", error); // Optional: Log the error for debugging
        return res.status(500).json({
        error: "Internal Server Error",
        message: error.message,
    });
    }
}
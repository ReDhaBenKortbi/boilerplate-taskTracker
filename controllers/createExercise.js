import { ExerciseModel } from "../models/exercise.model.js";
import { UserModel } from "../models/user.model.js";
import { getStringDate } from "../utils/getStringDate.js";

async function createExercise(req, res) {
    // Destructure the request body
    const { id, description, duration, date } = req.body;

    // Parse the date or use the current date
    const parsedDate = date ? getStringDate(date) : getStringDate();

    try {
        // Find the user by ID
        const user = await UserModel.findById(id);
        
        // Check if the user exists
        if (!user) {
            return res.status(404).json({ error: "Invalid Identifier" });
        }

        // Create a new exercise
        const newExercise = new ExerciseModel({
            username: user.username,
            description,
            duration: +duration,
            date: date ? new Date(date) : new Date(),
        });

        // Save the exercise to the database
        await newExercise.save();

        // Return the created exercise with a success status
        return res.status(201).json({
            _id: user._id,
            username: user.username,
            description,
            date: parsedDate,
            duration: +duration
        });
    } catch (error) {
        // Handle errors and return a server error response
        console.error("Error creating exercise:", error); // Optional: Log the error for debugging
        return res.status(500).json({
            error: "Internal Server Error",
            message: error.message,
        });
    }
}


export default createExercise;
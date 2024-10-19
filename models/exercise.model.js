import mongoose from "mongoose"

export let exerciseSchema = new mongoose.Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true}
}, {
    collection: "exercises",
    versionKey: false
})

export const ExerciseModel = new mongoose.model("excercise", exerciseSchema)
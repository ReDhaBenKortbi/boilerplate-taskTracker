import mongoose from "mongoose"
let exerciseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true }
})
let logsSchema = new mongoose.Schema({
    username: { type: String, required: true },
    count: { type: Number, required: true },
    log: [exerciseSchema]
}, {
    collection: "logs",
    versionKey: false
})

export const logs = new mongoose.model("logs", logsSchema)
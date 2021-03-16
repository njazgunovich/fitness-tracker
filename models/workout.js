var mongoose = require("mongoose")
var Schema = mongoose.Schema
var workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter your exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter your exercise name"
        },
        duration: {
            type: Number,
            required: "Enter your exercise duration in minutes"
        },
        distance: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        weight: {
            type: Number
        }
    }]
})
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
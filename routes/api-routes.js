var express = require("express")
var mongoose = require("mongoose")
var db = require("../models")
var router = express.Router()
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});
router.get("/api/workouts", function(req, res) {
    db.Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" } } }])
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
})
router.put("/api/workouts/:id", function(req, res) {
    db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
        .then(dbWorkout => { res.json(dbWorkout) })
        .catch(err => {
            console.log(err)
        })
})
router.post("/api/workouts", function(req, res) {
    db.Workout.create(req.body).then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            console.log(err)
        })
})
router.get("/api/workouts/range", function(req, res) {
    db.Workout.aggregate([{ $addFields: { totalDuration: { $sum: "$exercises.duration" } } }]).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
})
module.exports = router
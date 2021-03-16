var express = require("express")
var mongoose = require("mongoose")
var router = express.Router()
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});
router.get("/api/workouts", function(req, res) {

})
router.put("/api/workouts/:id", function(req, res) {

})
router.post("/api/workouts", function(req, res) {

})
router.get("/api/workouts/range", function(req, res) {

})
modules.exports = router
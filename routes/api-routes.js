const { Workout } = require("../models");
const db = require("../models");

module.exports = function (app) {  
/////////// API ROUTES //////////////

// route for workout data app.get 
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err)
    });
});

// create new workout app.post
app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.json(err);
    });
});


// update workout data app.put
// app.put("/api/workouts/:id", ({body}, res) => {
//     Workout.findByIdAndUpdate({}, { $push: })
// });


// populate with range ? app.get
};
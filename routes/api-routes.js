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
    db.Workout.create(req.body)
    .then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.json(err);
    });
});


// update workout data app.put
app.put("/api/workouts/:id", (req, res) => {
    var id = req.params.id;
    db.Workout.create(req.body)
    .then
});


// populate with range ? app.get
};
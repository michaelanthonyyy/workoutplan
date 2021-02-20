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

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .limit(50)
    .populate()
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err)
    })
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(body)
    db.Workout.findByIdAndUpdate(params.id,
        { $push: { exercises: body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
});

};
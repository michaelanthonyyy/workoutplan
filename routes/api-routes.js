const { Workout } = require("../models");
const db = require("../models");
const router = require("express").Router();

/////////// API ROUTES //////////////
router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "exercises.duration"}
            }
        }
    ]).then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.json(err)
    })
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch((err) => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .limit(10)
    .populate()
    .then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err)
    })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(body)
    db.Workout.findByIdAndUpdate(params.id,
        { $push: { exercises: body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        })
});

module.exports = router;
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });


// Route for exercise html app.get


// Route for stats html app.get


// route for workout data app.get 


// update workout data app.put


// populate page with workout data app.put


// create new workout app.post


// populate with range ? app.get



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
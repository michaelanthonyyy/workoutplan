const db = require("../models");
const path = require("path");


module.exports = function(app) {
    /////////// HTML ROUTES //////////////

// Exercise HTML 
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// Stats HTML
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

}
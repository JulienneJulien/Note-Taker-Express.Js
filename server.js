const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
const notes = require("./db/db.json");

// MIDDLEWARE
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// HTML ROUTES CREATED
// GET * should return the index.html file.
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
// GET /notes should return the notes.html file.
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});



// START LISTENING
app.listen(PORT, () => console.log('Server Listening on port' + PORT));
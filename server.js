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

// API ROUTES CREATED
// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});
// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. NPM Package - UUID was added to each new note a unique id 
app.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);
});
// START LISTENING
app.listen(PORT, () => console.log('Server Listening on port' + PORT));
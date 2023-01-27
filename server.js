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







app.listen(PORT, () => console.log('Server Listening on port' + PORT));
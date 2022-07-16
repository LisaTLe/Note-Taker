const { Router } = require("express");
const fs = require("fs");
const db = require("../Develop/db/db.json");

// "uuid" package for unique id
const { v4: uuidv4 } = require("uuid");

const router = Router();

//API GET Requests
router.get("/notes", (req, res) => {
  fs.readFile(db, "utf-8", (err, data) => {
    // res.json(JSON.parse(data))
    if (err) {
      console.log(err);
      res.status(404).send("Error!");
    } else {
      console.log("GET NOTES requested", JSON.parse(data));
      //send response
      res.json(JSON.parse(data));
    }
  });
});

//API POST Requests
router.post("/notes", (req, res) => {
  let newNote = req.body;

  console.log("New note created:", newNote);
  data.push({ newNote, id: uuidv4() });
  fs.writeFile(db, JSON.stringify(data), "utf-8", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("New note successfully added into 'db.json' file!");
    }
  });
  //send response
  res.json(newNote);
});

//API DELETE Request
router.delete("/notes/:id", (req, res) => {
  let noteId = req.params.id;
  console.log("DELETE REQUEST FOR: ${noteId}");
  fs.readFile(db, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.send("There was an error for the DELETE request");
    } else {
      let oldNotes = JSON.parse(data);
      let newNotes = oldNotes.filter((note) => note.id !== noteId);
      fs.writeFile(db, JSON.stringify(newNotes));
      console.log("Note was successfully deleted!");
      //send response
      res.json(newNotes);
    }
  });
});

module.exports = router;

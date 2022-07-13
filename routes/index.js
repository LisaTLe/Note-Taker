const { Router } = require("express");
const fs = require("fs");

// "uuid" package for unique id
// const { v4: uuidv4 } = require("uuid");

const router = Router();

//API GET Requests
router.get("/", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    // res.json(JSON.parse(data))
    if (err) {
      console.log(err);
      res.status(404).send("Error!");
    } else {
      console.log("GET NOTES requested", JSON.parse(data));
      res.json(JSON.parse(data));
    }
  });
});

//API POST Requests
router.post("/", (req, res) => {
  let newNote = req.body;

  console.log("New note created:", newNote);
  notes.push(newNote);
  res.json(newNote);
});

module.exports = router;

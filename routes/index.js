const { Router } = require("express");
const fs = require("fs");

// "uuid" package for unique id
const { v4: uuidv4 } = require("uuid");

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
      //send response
      res.json(JSON.parse(data));
    }
  });
});

//API POST Requests
router.post("/", (req, res) => {
  let newNote = req.body;

  console.log("New note created:", newNote);
  data.push({ newNote, id: uuidv4() });
  fs.writeFile("./db/db.json", JSON.stringify(data), "utf-8", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("New note successfully added into 'db.json' file!");
    }
  });
  //send response
  res.json(newNote);
});

module.exports = router;

//API DELETE Request
router.delete("/:id", (req, res) => {
  let noteId = req.params.id;
  console.log(id);
});

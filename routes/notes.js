const { Router } = require("express");
const fs = require("fs");
// const db = require("../db/db.json");

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
  let { title, body } = req.body;

  console.log("New note created");
  fs.readFile(
    "./db/db.json",
    "utf-8",
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(404).send("Error!");
      } else {
        const existData = JSON.parse(data);
        existData.push({ title, body, id: uuidv4() });
        fs.writeFile(
          "./db/db.json",
          JSON.stringify(existData),
          "utf-8",
          (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("New note successfully added into 'db.json' file!");
            }
          }
        );
      }
    },
    //send response
    res.send("New note created")
  );
});

//API DELETE Request
router.delete("/:id", (req, res) => {
  let { id } = req.params;
  console.log(`Delete Requested for ${id}`);
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.send("There was an error for the DELETE request");
    } else {
      let existNotes = JSON.parse(data);
      let newNotes = existNotes.filter((note) => note.id !== id);
      fs.writeFile("./db/db.json", JSON.stringify(newNotes), "utf-8", (err) => {
        if (err) {
          console.log(err);
        }
        res.send("Note was successfully deleted!");
      });
    }
  });
});

module.exports = router;

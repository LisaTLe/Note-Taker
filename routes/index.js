const { Router } = require("express");
const path = require("path");
// const notesLink = require("./notes");

const router = Router();

//connecting notes.html
// router.use("/notes", notesLink);
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
});

module.exports = router;

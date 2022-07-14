const express = require("express");
const fs = require("fs");
const api = require("./routes");
// const index = require("../Note-Taker/routes/index");
// const notes = require("../Note-Taker/routes/notes");

const app = express();

const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.static("public"));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api", api);
// app.use("/", index);

//Listen port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

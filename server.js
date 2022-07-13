const express = require("express");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

//Listen port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
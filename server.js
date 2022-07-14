const { Router } = require("express");
const fs = require("fs");

const router = Router();

const PORT = process.env.PORT || 3001;

//Middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use("/api", api);

//Listen port
router.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

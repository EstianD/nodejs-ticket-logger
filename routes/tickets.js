const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("tickets");
});

router.post("/create", (req, res) => {
  res.send("new ticket route");
});

// router.get("/:id", (req, res) => {
//   res.send(`this is from user ${req.params.id}`);
// });

module.exports = router;

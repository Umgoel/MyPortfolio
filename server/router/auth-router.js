const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).send("Hello World from auth-server!");
});
router.route("/blog").get((req, res) => {
  res.status(200).send("Hello blog from auth-server!");
});

module.exports = router;

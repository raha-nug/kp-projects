const express = require("express");
const sekreRouter = express.Router();

sekreRouter.get("/", (req, res) => {
  res.render('sekre')
});

module.exports = { sekreRouter };

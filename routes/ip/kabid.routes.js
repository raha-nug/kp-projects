const express = require("express");
const kabidPageRouter = express.Router();

kabidPageRouter.get("/", (req, res) => {
  res.render("dashboard-admin");
});

module.exports = { kabidPageRouter };

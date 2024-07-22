const express = require("express");
const operatorPageRouter = express.Router();

operatorPageRouter.get("/", (req, res) => {
  res.render("dashboard-admin");
});

module.exports = { operatorPageRouter };

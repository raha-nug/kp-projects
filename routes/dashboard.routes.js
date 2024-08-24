const express = require("express");
const { getSummary } = require("../controllers/dashboard.controller");

const dashboardRouter = express.Router();

dashboardRouter.get("/", getSummary);

module.exports = dashboardRouter;

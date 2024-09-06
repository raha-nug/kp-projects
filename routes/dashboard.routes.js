const express = require("express");
const { getSummary } = require("../controllers/dashboard.controller");
const desaBlankspotRouter = require("./act-route/desa-blankspot.routes");
const instansiAppRouter = require("./act-route/instansi-app.routes");
const appsRouter = require("./act-route/apps.routes");
const verifyToken = require("../middleware/verify-token");

const dashboardRouter = express.Router();

dashboardRouter.use(verifyToken);

dashboardRouter.get("/", getSummary);

dashboardRouter.use("/", desaBlankspotRouter);
dashboardRouter.use("/", instansiAppRouter);
dashboardRouter.use("/", appsRouter);
dashboardRouter.get("/example", (req, res) => {
  res.render("dashboard", { type: "example", name: req.user.name });
});

module.exports = dashboardRouter;

const express = require("express");
const { typesRouter } = require("../crud/types.routes");

const adminPageRouter = express.Router();

adminPageRouter.get("/", (req, res) => {
  res.render("dashboard-admin");
});

adminPageRouter.use("/types", typesRouter);

module.exports = { adminPageRouter };

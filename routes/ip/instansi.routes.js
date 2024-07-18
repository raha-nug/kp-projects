const express = require("express");
const { permohonanRouter } = require("../crud/permohonan.routes");
const instansiPageRouter = express.Router();

instansiPageRouter.get("/", (req, res) => {
  res.render("dashboard-instansi");
});

instansiPageRouter.use("/permohonan", permohonanRouter);

module.exports = { instansiPageRouter };

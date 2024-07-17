const express = require("express");
const { typesRouter } = require("./crud/types.routes");
const { authRouter } = require("./auth/auth.routes");
const { instansiPageRouter } = require("./ip/instansi.routes");
const ipRouter = express.Router();

ipRouter.get("/", (req, res) => {
  res.render("dashboard-umum");
});

ipRouter.use("/types", typesRouter);

ipRouter.use("/instansi", instansiPageRouter);


ipRouter.use("/auth", authRouter);

ipRouter.get("/pembuatan-akun-email", (req, res) => {
  res.render("pembuatan-akun-email");
});

ipRouter.get("/penyimpanan-server", (req, res) => {
  res.render("penyimpanan-server");
});

ipRouter.get("/instansi", (req, res) => {
  res.render("dashboard-instansi");
});

module.exports = { ipRouter };

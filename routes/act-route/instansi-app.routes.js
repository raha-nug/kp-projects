const express = require("express");
const {
  getInstansi,
  createIntansi,
  updateInstansiApp,
  deleteInstansi,
  getInstansiByParams,
} = require("../../controllers/instansi-app.controller");
const { valiadateInstansiApp } = require("../../middleware/validate-input");
const instansiAppRouter = express.Router();

instansiAppRouter.get("/instansi-app", getInstansi);
instansiAppRouter.get("/instansi-app/:slug", getInstansiByParams);

instansiAppRouter.post("/instansi-app", valiadateInstansiApp, createIntansi);

instansiAppRouter.put(
  "/instansi-app/:id/edit",
  valiadateInstansiApp,
  updateInstansiApp
);

instansiAppRouter.delete("/instansi-app/:id/delete", deleteInstansi);

module.exports = instansiAppRouter;

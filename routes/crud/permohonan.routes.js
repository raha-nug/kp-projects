const express = require("express");
const {
  getPermohonanById,
} = require("../../controllers/crud/permohonan.controller");
const permohonanRouter = express.Router();

permohonanRouter.get("/", getPermohonanById);



permohonanRouter.get("/add", (req, res) => {
  res.render("form");
});

permohonanRouter.post("/add", (req, res) => {
  console.log(req.body);
});

module.exports = { permohonanRouter };

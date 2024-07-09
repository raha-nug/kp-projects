const express = require("express");
const permohonanRouter = express.Router();

permohonanRouter.get("/", (req, res) => {
  res.send("from permohonan");
});

module.exports = { permohonanRouter };

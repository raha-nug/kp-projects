const express = require("express");
const desaBlankspotRouter = express.Router();
const multer = require("multer");
const path = require("path");
const {
  validateDesaBlankspot,
  checkFilePresence,
} = require("../../middleware/validate-desa");
const {
  getDesaBlankspot,
  createDesaBlankspot,
} = require("../../controllers/desa-blankspot.controller");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

desaBlankspotRouter.get("/blankspot", getDesaBlankspot);

desaBlankspotRouter.post(
  "/blankspot",
  upload.single("location_image"),
  checkFilePresence,
  validateDesaBlankspot,
  createDesaBlankspot
);

desaBlankspotRouter.put("/blankspot", (req, res) => {});

desaBlankspotRouter.delete("/blankspot", (req, res) => {});

module.exports = desaBlankspotRouter;

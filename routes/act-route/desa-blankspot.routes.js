const express = require("express");
const desaBlankspotRouter = express.Router();
const multer = require("multer");
const path = require("path");
const {
  validateDesaBlankspot,
  checkFilePresence,
} = require("../../middleware/validate-input");
const {
  getDesaBlankspot,
  createDesaBlankspot,
  updateDesaBlankspot,
  deleteDesaBlankspot,
  getFormBlankspot,
  getFormEditBlankspot,
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
desaBlankspotRouter.get("/blankspot/:id/edit", getFormEditBlankspot);

desaBlankspotRouter.get("/blankspot/add", getFormBlankspot);
desaBlankspotRouter.get("/blankspot", getDesaBlankspot);

desaBlankspotRouter.post(
  "/blankspot",
  upload.single("location_image"),
  checkFilePresence,
  validateDesaBlankspot,
  createDesaBlankspot
);

desaBlankspotRouter.post(
  "/blankspot/:id/edit",
  upload.single("location_image"),
  validateDesaBlankspot,
  updateDesaBlankspot
);


desaBlankspotRouter.delete("/blankspot/:id/delete", deleteDesaBlankspot);

module.exports = desaBlankspotRouter;

const express = require("express");
const {
  getTypes,
  getTypeById,
  createType,
  deleteType,
  updateType,
} = require("../../controllers/crud/types.controller");
const typesRouter = express.Router();

typesRouter.get("/", getTypes);

typesRouter.get("/:id", getTypeById);

typesRouter.post("/", createType);

typesRouter.put("/:id", updateType);

typesRouter.delete("/:id", deleteType);

module.exports = { typesRouter };

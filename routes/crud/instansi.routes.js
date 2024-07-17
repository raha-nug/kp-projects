const express = require("express");
const { getInstansi, getInstansiById, createInstansi, updateInstansi, deleteInstansi } = require("../../controllers/crud/instansi.controller");

const instansiRouter = express.Router();

instansiRouter.get("/instansi", getInstansi);

instansiRouter.get("/instansi/:id", getInstansiById);

instansiRouter.post("/instansi", createInstansi);

instansiRouter.put("/instansi/:id", updateInstansi);

instansiRouter.delete("/instansi/:id", deleteInstansi);

module.exports = { instansiRouter };

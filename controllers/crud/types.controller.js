const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getTypes = async (req, res) => {
  try {
    const types = await prisma.types.findMany();
    res.send({
      status: 200,
      data: types,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const getTypeById = async (req, res) => {
  const typeId = Number(req.params.id);
  try {
    const type = await prisma.types.findUnique({
      where: {
        id: typeId,
      },
    });

    res.status(200).send({
      status: 200,
      data: type,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const createType = async (req, res) => {
  try {
    const type = await prisma.types.create({
      data: req.body,
    });

    res.status(201).send({
      status: 201,
      message: "Berhasil membuat type",
      data: type,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const updateType = async (req, res) => {
  const typeId = Number(req.params.id);
  try {
    const type = await prisma.types.findUnique({
      where: {
        id: typeId,
      },
    });

    if (!type) {
      res.send({
        message: "Type tidak ditemukan",
      });
      return;
    }

    const newType = await prisma.types.update({
      where: {
        id: typeId,
      },
      data: req.body,
    });

    res.status(201).send({
      status: 201,
      message: "Type berhasil diubah",
      data: newType,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deleteType = async (req, res) => {
  const typeId = Number(req.params.id);
  try {
    const type = await prisma.types.findUnique({
      where: {
        id: typeId,
      },
    });

    if (!type) {
      res.send({
        message: "Type tidak ditemukan",
      });
      return;
    }

    await prisma.types.delete({
      where: {
        id: typeId,
      },
    });

    res.status(201).send({
      message: "Type berhasil dihapus",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = { getTypes, getTypeById, createType, updateType, deleteType };

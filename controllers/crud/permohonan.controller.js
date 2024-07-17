const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPermohonanById = async (req, res) => {
  const id = Number(req.body.id);
  try {
    const data = await prisma.permohonan.findUnique({
      where: {
        id,
      },
    });

    if (!data) {
      res.status({ message: "Data tidak ditemukan" });
      return;
    }

    res.send({
      status: 200,
      data: data,
    });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

const createPermohonan = async (req, res) => {
  const data = req.body;

  const permohonan = await prisma.permohonan.create({
    data: data,
  });
  res.send({
    data: data,
  });
};

module.exports = { getPermohonanById };

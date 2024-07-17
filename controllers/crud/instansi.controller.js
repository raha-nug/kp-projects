const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getInstansi = async (req, res) => {
  try {
    const instansi = await prisma.instansi.findMany();
    res.send({
      status: 200,
      data: instansi,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const getInstansiById = async (req, res) => {
  const instansiId = Number(req.params.id);
  try {
    const instansi = await prisma.instansi.findUnique({
      where: {
        id: instansiId,
      },
    });

    res.status(200).send({
      status: 200,
      data: instansi,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const createInstansi = async (req, res) => {
  const user_id = Number(req.body.user_id);
  try {

    const isUserExist = await prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });

    if (!isUserExist) {
      res.send({
        message: "User tidak tersedia",
      });
      return;
    }

    const instansi = await prisma.instansi.create({
      data: {
        ...req.body,
        user_id,
      },
    });

    res.status(201).send({
      status: 201,
      message: "Berhasil membuat instansi",
      data: instansi,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const updateInstansi = async (req, res) => {
  const instansiId = Number(req.params.id);
  try {
    const instansi = await prisma.instansi.findUnique({
      where: {
        id: instansiId,
      },
    });

    if (!instansi) {
      res.send({
        message: "Instansi tidak ditemukan",
      });
      return;
    }

    const newInstansi = await prisma.instansi.update({
      where: {
        id: instansiId,
      },
      data: req.body,
    });

    res.status(201).send({
      status: 201,
      message: "Instansi berhasil diubah",
      data: newInstansi,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deleteInstansi = async (req, res) => {
  const instansiId = Number(req.params.id);
  try {
    const instansi = await prisma.instansi.findUnique({
      where: {
        id: instansiId,
      },
    });

    if (!instansi) {
      res.send({
        message: "Instansi tidak ditemukan",
      });
      return;
    }

    await prisma.instansi.delete({
      where: {
        id: instansiId,
      },
    });

    res.status(201).send({
      message: "Instansi berhasil dihapus",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  getInstansi,
  getInstansiById,
  createInstansi,
  updateInstansi,
  deleteInstansi,
};

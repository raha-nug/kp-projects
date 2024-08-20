const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDesaBlankspot = async (req, res) => {
  try {
    const allDesa = await prisma.desaBlankspot.findMany();
    res.status(200).send({
      status: "success",
      data: allDesa,
      total_data: allDesa.length,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Terjadi kesalahan saat mengambil data",
    });
  }
};

const createDesaBlankspot = async (req, res) => {
  try {
    const body = {
      ...req.body,
      location_image: `/uploads/${req.file.filename}`,
    };

    const desa = await prisma.desaBlankspot.create({
      data: body,
    });

    res.status(201).send({
      status: "success",
      message: "Data berhasil disimpan",
      data: desa,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat menyimpan data",
    });
  }
};

module.exports = { getDesaBlankspot, createDesaBlankspot };

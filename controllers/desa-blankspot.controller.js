const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const path = require("path");
const fs = require("fs");

const getFormBlankspot = async (req, res) => {
  try {
    res.render("forms/blankspot");
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Terjadi kesalahan saat mengambil data",
    });
  }
};
const getDesaBlankspot = async (req, res) => {
  try {
    const allDesa = await prisma.desaBlankspot.findMany();
    res.render("dashboard", {
      status: "success",
      type: "blankspot",
      total_data: allDesa.length,
      data: allDesa,
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

const updateDesaBlankspot = async (req, res) => {
  try {
    const desa = await prisma.desaBlankspot.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!desa) {
      return res.status(404).send({
        status: "error",
        message: "Data tidak ditemukan",
      });
    }

    const imageName = path.basename(desa.location_image);
    if (req.file) {
      if (desa.location_image) {
        const rootDir = path.join(__dirname, ".."); // Kembali satu level ke root proyek
        const oldFilePath = path.join(rootDir, "uploads", imageName);

        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }

      desa.location_image = req.file.filename;
    }

    const updatedDesa = await prisma.desaBlankspot.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        ...req.body,
        location_image: `/uploads/${req.file ? req.file.filename : imageName}`,
      },
    });

    res.status(200).send({
      status: "success",
      message: "Data berhasil diubah",
      data: updatedDesa,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat menyimpan data",
    });
  }
};

const deleteDesaBlankspot = async (req, res) => {
  try {
    const desa = await prisma.desaBlankspot.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!desa) {
      return res.status(404).send({
        status: "error",
        message: "Data tidak ditemukan",
      });
    }

    const rootDir = path.join(__dirname, ".."); // Kembali satu level ke root proyek
    const imageName = path.basename(desa.location_image);
    const oldFilePath = path.join(rootDir, "uploads", imageName);

    console.log(imageName);
    console.log(oldFilePath);

    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath);
    }

    await prisma.desaBlankspot.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).send({
      status: "success",
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat menyimpan data",
    });
  }
};

module.exports = {
  getFormBlankspot,
  getDesaBlankspot,
  createDesaBlankspot,
  updateDesaBlankspot,
  deleteDesaBlankspot,
};

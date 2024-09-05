const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
  try {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(404).send({
        status: "error",
        message: "Email telah digunakan",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        name: "Admin",
        email,
        password: hashedPassword,
      },
    });

    res.redirect("/ip/auth/login");
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat mendaftar",
    });
  }
};
const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(404).send({
        status: "error",
        message: "Email telah digunakan",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        ...req.body,
        password: hashedPassword,
      },
    });

    res.status(201).send({
      status: "success",
      message: "Pendaftaran berhasil",
      data: {
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat mendaftar",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).send({
        status: "error",
        message: "User tidak ditemukan",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ name: user.name }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });

      res.cookie("token", token, { httpOnly: true });
      res.redirect("/ip/dashboard");
    }
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message || "Terjadi kesalahan saat masuk",
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/ip/auth/login");
};

module.exports = { register, login, logout, createAdmin };

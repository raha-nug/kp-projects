const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      res.send({
        message: "Email tidak ditemukan",
      });
      return;
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) throw err;

      if (result) {
        req.session.loggedin = true;
        req.session.email = user.email;
        req.session.role = user.role_type;

        if (user.role_type === "ADMIN") {
          res.redirect("/ip/admin");
          return;
        } else if (user.role_type === "PEMOHON") {
          res.redirect("/ip/instansi");
          return;
        } else if (user.role_type === "OPERATOR") {
          res.redirect("/ip/operator");
          return;
        } else if (user.role_type === "KABID") {
          res.redirect("/ip/kabid");
          return;
        } else {
          res.status(403).send("Forbidden: Anda tidak memiliki akses");
          return;
        }
      } else {
        res.send({
          message: "Password salah",
        });
        return;
      }
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
};

// create user pemohon

const createUser = async (req, res) => {
  const { password, role_type, email } = req.body;

  const isEmailExist = await prisma.users.findUnique({
    where: {
      email,
    },
  });

  if (isEmailExist) {
    res.send({
      message: "Email sudah digunakan",
    });
    return;
  }

  const isRoleExsist = await prisma.roles.findUnique({
    where: {
      type: role_type,
    },
  });

  if (!isRoleExsist) {
    res.send({
      message: "Role tidak tersedia",
    });

    return;
  }

  const salt = await bcrypt.genSalt();

  const hashedPass = await bcrypt.hash(password, salt);

  const data = {
    ...req.body,
    role_type: role_type,
    password: hashedPass,
  };

  const user = await prisma.users.create({
    data,
  });

  res.send({
    status: 201,
    data: {
      user: user.name,
      role_type: user.role_type,
    },
  });
};

const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Gagal menghapus session");
    }
    res.clearCookie("connect.sid");
    res.redirect("/ip/auth/login");
  });
};

module.exports = { loginUser, createUser, logout };

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const roles = [
  { type: "ADMIN" },
  { type: "PEMOHON" },
  { type: "OPERATOR" },
  { type: "KABID" },
];

const status = [{ type: "PENDING" }, { type: "REJECTED" }, { type: "FINISH" }];

const createRoles = async () => {
  await prisma.roles.createMany({
    data: roles,
  });

  console.log("Roles created");
};

const createStatus = async () => {
  await prisma.status.createMany({
    data: status,
  });
  console.log("Status created");
};

const createAdmin = async () => {
  const salt = await bcrypt.genSalt();

  const hashedPass = await bcrypt.hash(process.env.ADMIN_PASSWORD, salt);

  const data = {
    name: "ADMIN",
    email: process.env.ADMIN_EMAIL,
    password: hashedPass,
    role_type: "ADMIN",
  };

  await prisma.users.create({
    data: data,
  });
  console.log("Admin created");
};

createRoles();
createStatus();
createAdmin();

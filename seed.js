const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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

  console.log("Roles created")
};

const createStatus = async () => {
  await prisma.status.createMany({
    data: status,
  });
  console.log("Status created");
};

createRoles();
createStatus();

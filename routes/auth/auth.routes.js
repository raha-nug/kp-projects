const {
  register,
  login,
  logout,
  createAdmin,
} = require("../../controllers/auth.controller");
const express = require("express");
const {
  validateLogin,
  validateRegister,
} = require("../../middleware/validate-input");
const verifyToken = require("../../middleware/verify-token");

const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.render("forms/auth/login");
});

authRouter.post("/register", verifyToken, validateRegister, register);
authRouter.get("/crate-admin", createAdmin);
authRouter.post("/login", validateLogin, login);
authRouter.get("/logout", logout);

module.exports = authRouter;

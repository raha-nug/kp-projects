const {
  register,
  login,
  logout,
} = require("../../controllers/auth.controller");
const express = require("express");
const {
  validateLogin,
  validateRegister,
} = require("../../middleware/validate-input");
const authRouter = express.Router();

authRouter.get("/login", (req, res) => {
  res.render("forms/auth/login");
});

authRouter.post("/register", validateRegister, register);
authRouter.post("/login", validateLogin, login);
authRouter.get("/logout", logout);

module.exports = authRouter;

const express = require("express");
const {
  loginUser,
  createUser,
  logout,
} = require("../../controllers/auth/auth.controller");
const { isLoggedOut, isLoggedIn, checkRole } = require("../../utils/verify");
const authRouter = express.Router();

authRouter.get("/login", isLoggedOut, (req, res) => {
  res.render("login");
});

authRouter.post("/login", isLoggedOut, loginUser);
authRouter.get("/logout", isLoggedIn, logout);
authRouter.post("/create-user", isLoggedIn, checkRole("ADMIN"), createUser);

module.exports = { authRouter };

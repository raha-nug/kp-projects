const express = require("express");
const { loginUser, createUser } = require("../../controllers/auth/auth.controller");
const authRouter = express.Router()

authRouter.get('/login',(req, res)=>{
    res.render('login')
})

authRouter.post("/login", loginUser);
authRouter.post("/create-user", createUser);

module.exports = { authRouter };

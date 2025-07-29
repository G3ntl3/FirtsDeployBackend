const express = require("express");
const router = express.Router()
const userModel= require("../Models/user.model");
const { signup_auth, login_auth, render_signup, render_login } = require("../Controllers/user.controller");

router.get("/signup", render_signup);

router.get("/login",render_login);
router.post("/signup",signup_auth );

router.post("/login", login_auth)

module.exports= router
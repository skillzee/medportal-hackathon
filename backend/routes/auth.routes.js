import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/patient/login", login);

router.post("/logout", logout);

export default router;

import express from "express";
import { createUser, loginCurrentUser, logoutCurrentUser } from "../controllers/userController.js";

const route = express.Router();

route.post("/", createUser);
route.post("/login", loginCurrentUser);
route.post("/logout", logoutCurrentUser)

export default route;
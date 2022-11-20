import UserController from "../controllers/UserController.js";
import express, { application } from "express";
import database from "../database/connect.js";
import VerifyIfUserExist from "../middlewares/VerifyIfUserExist.js";

const UserRouter = express.Router();

UserRouter.get("/users", UserController.getUsers);
UserRouter.get("/user/:id", UserController.getUnicUser);
UserRouter.post("/user/create", VerifyIfUserExist, UserController.addUser);

export default UserRouter;

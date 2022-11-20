import UserController from "../controllers/UserController.js";
import express from "express";
import database from "../database/connect.js";
import OperationController from "../controllers/OperationController.js";

const OperationRouter = express.Router();

OperationRouter.get("/operation/:id", OperationController.getOperation);

export default OperationRouter;

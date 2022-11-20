import express from "express";
import userController from "./controllers/UserController.js";
import OperationRouter from "./routes/Operation.js";
import UserRouter from "./routes/User.js";

const app = express();

app.use(express.json());
app.use(UserRouter);
app.use(OperationRouter);

app.listen(3001, () => {
  console.log("rodando na 3001");
});

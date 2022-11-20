import express from "express";
import userController from "./controllers/UserController.js";
import OperationRouter from "./routes/Operation.js";
import UserRouter from "./routes/User.js";

const app = express();

app.use(express.json());
app.use(UserRouter);
app.use(OperationRouter);

const port = process.env.PORT || "3001";

app.listen(port, () => {
  console.log("rodando " + port);
});

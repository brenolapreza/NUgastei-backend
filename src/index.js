import express from "express";
import userController from "./controllers/UserController.js";
import OperationRouter from "./routes/Operation.js";
import UserRouter from "./routes/User.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json());
app.use(UserRouter);
app.use(OperationRouter);

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.json({ msg: "Aplicação funcionando" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

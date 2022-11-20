import database from "../database/connect.js";

class UserController {
  getUsers(req, res) {
    database
      .select("*")
      .table("users")
      .then((data) => {
        res.status(200).json({ status: 200, data });
      });
  }
  getUnicUser(req, res) {
    const { id } = req.params;

    database
      .select("id", "name", "user")
      .where({ id })
      .table("users")
      .then((data) => {
        if (data.length > 0) {
          res.status(200).json({ status: 200, data });
        } else {
          res
            .status(400)
            .json({ status: 400, msg: "Nenhum usuário encontrado" });
        }
      });
  }
  addUser(req, res) {
    const { name, user, password } = req.body;

    database
      .insert({ name, user, password })
      .table("users")
      .then((data) => {
        database
          .insert({ value: "0", id_user: data })
          .table("operation")
          .then((data) => {
            res
              .status(200)
              .json({ status: 200, data, msg: "Usuário criado com sucesso!" });
          });
      });
  }
}

export default new UserController();

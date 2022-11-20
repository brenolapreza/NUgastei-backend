import database from "../database/connect.js";

class OperationController {
  getOperation(req, res) {
    const { id } = req.params;

    database
      .select("id", "value", "id_user")
      .where({ id })
      .table("operation")
      .then((data) => {
        if (data.length > 0) {
          res.status(200).json({ status: 200, data });
        } else {
          res
            .status(400)
            .json({ status: 400, msg: "Nenhuma operação encontrada" });
        }
      });
  }
}

export default new OperationController();

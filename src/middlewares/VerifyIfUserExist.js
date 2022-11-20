import database from "../database/connect.js";

function VerifyIfUserExist(req, res, next) {
  const login = database
    .select("user")
    .from("users")
    .then((data) => {
      const verify = data.map((value) => value.user).includes(req.body.user);

      if (verify) {
        res.status(400).json({
          status: 400,
          msg: "Usuário já criado, tente outro login",
        });
      } else {
        next();
      }
    });

  return login;
}
export default VerifyIfUserExist;

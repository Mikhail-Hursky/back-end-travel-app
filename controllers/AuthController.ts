import User from "../models/User";

const AuthController = {
  async registration(req, res) {
    try {
    } catch (e) {}
  },
  async login(req, res) {
    try {
    } catch (e) {}
  },
  async getUser(req, res) {
    try {
      const user = new User({
        nickName: "tarakan721",
        password: "12312312",
        email: "email73213",
      });

      user.save();
      res.json(user);
    } catch (e) {}
  },
};

export default AuthController;

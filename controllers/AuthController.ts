import User from "../models/User";
import * as bcrypt from "bcryptjs";

const AuthController = {

  async registration(req, res) {
    try {
      const { nickName, password, email } = req.body;
      const candidateNickName = await User.findOne({ nickName });
      const candidate = await User.findOne({ email });

      if (candidateNickName)
        return res.status(400).json({ message: "Nickname already exists" });
      if (candidate)
        return res.status(400).json({ message: "Email already exists" });

      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({ nickName, password: hashPassword, email });
      await user.save();
      return res
        .status(200)
        .json({ message: "Registration completed successfully" });
    } catch (e) {
      console.log(e);
      
      res.status(400).json({ message: "Registration Error" });
    }
  },


  async login(req, res) {
    try {
    } catch (e) {
      res.status(400).json({ message: "Login Error" });
    }
  },
  async getUser(req, res) {
    try {
      res.json();
    } catch (e) {}
  },
};

export default AuthController;

import User from "../models/IUser";
import * as bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import * as jwt from "jsonwebtoken";
import secret from "../config";

const generateToken = (nickName) => {
  const payload = { nickName };
  return jwt.sign(payload, secret.secret, { expiresIn: "24h" });
};

const AuthController = {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ message: "Registration error" }, errors);
      const { nickName, password, email } = req.body;
      const candidateNickName = await User.findOne({ nickName });
      const candidate = await User.findOne({ email });

      if (candidateNickName)
        return res.status(400).json({ message: "Nickname already exists" });
      if (candidate)
        return res.status(400).json({ message: "Email already exists" });

      const hashPassword = bcrypt.hashSync(password, 7);
      const user = new User({
        nickName,
        password: hashPassword,
        avatar: "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png",
        email,
      });

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
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      console.log(user);

      if (!user) {
        return res
          .status(400)
          .json({ message: "User with this username was not found" });
      }

      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        res.status(400).json({ message: "Wrong password entered" });
      }
      const token = generateToken(user.nickName);

      return res.json(token);
    } catch (e) {
      res.status(400).json({ message: "Login Error" });
    }
  },
};

export default AuthController;

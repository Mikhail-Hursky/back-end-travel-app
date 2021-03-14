import { Router } from "express";
import * as jwt from "jsonwebtoken";
import secret from "../config";
import app, { PATH } from "../app";
import User from "../models/IUser";
import * as multer from "multer";

const router = Router();

const upload = multer({ dest: "uploads" });

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, secret.secret);
    //@ts-ignore
    file.originalname = data.nickName;

    cb(null, file.originalname + "." + file.mimetype.split("/")[1]);
  },
});
// определение фильтра
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

router.post(
  "/avatar",
  multer({ storage: storageConfig, fileFilter: fileFilter }).single("filedata"),
  async function (req, res) {
    if (!req.headers.authorization) return;
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return;
    const data = jwt.verify(token, secret.secret);
    //@ts-ignore
    const nickName = data.nickName;
    let filedata = req.file;
    console.log(filedata);
    if (!filedata) res.status(400).json({ message: "Invalid images" });
    else {  
      let path = "https://rs-react.herokuapp.com/static/" + filedata.filename;
      const response = await User.updateOne({ nickName }, { avatar: path });
      res.status(200).json({ message: "Succes" });
    }
  }
);

export default router;

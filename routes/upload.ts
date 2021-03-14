import { Router } from "express";
import * as multer from "multer";
import * as jwt from "jsonwebtoken";
import secret from "../config";
import { PATH } from "../app";
import User from "../models/IUser";

const router = Router();

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "avatars");
  },
  filename: (req, file, cb) => {
    if (!req.headers.authorization) return;
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return;

    const data = jwt.verify(token, secret.secret);
    //@ts-ignore
    file.originalname = data.nickName;

    cb(null, file.originalname + "." + file.mimetype.split("/")[1]);
  },
});

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

const uploadAvatars = multer({
  storage: storageConfig,
  fileFilter: fileFilter,
});

router.post("/avatar", uploadAvatars.single("filedata"), upload);

async function upload(req, res, next) {
  if (!req.headers.authorization) return;
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return;

  const data = jwt.verify(token, secret.secret);
  //@ts-ignore
  const nickName = data.nickName;
  let filedata = req.file;
  console.log(PATH);

  console.log(filedata);
  if (!filedata) res.send("Ошибка при загрузке файла");
  else {
    let path = PATH + "\\" + filedata.path.split("\\\\").join("\\");
    console.log(path);

    const response = await User.updateOne({ nickName }, { avatar: path });

    res.status(200);
  }
}

export default router;

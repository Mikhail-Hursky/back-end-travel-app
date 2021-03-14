import { Schema, model, Document } from "mongoose";
import { IUser } from "../types/User";

const User = new Schema({
  nickName: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true},
  email: { type: String, unique: true, required: true },
});

export default model<IUser & Document>("User", User);

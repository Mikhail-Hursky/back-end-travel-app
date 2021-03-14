import { ObjectId } from "mongodb";

export interface IUser {
  _id: ObjectId;
  nickName: string;
  password: string;
  avatar: string;
  email: string;
}

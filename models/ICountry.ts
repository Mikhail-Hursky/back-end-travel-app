import { Schema, model, Document } from "mongoose";
import { ICountry } from "../types/Country";

const Country = new Schema({
  img: { type: String, required: true },
  capital: {
    en: { type: String, unique: true, required: true },
    ru: { type: String, unique: true, required: true },
    fr: { type: String, unique: true, required: true },
  },
  country: {
    en: { type: String, unique: true, required: true },
    ru: { type: String, unique: true, required: true },
    fr: { type: String, unique: true, required: true },
  },
});

export default model<ICountry & Document>("Country", Country);

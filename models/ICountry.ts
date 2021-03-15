import { Schema, model, Document } from "mongoose";
import { ICountry } from "../types/Country";

const Country = new Schema({
  img: { type: String, required: true },
  capital: {
    en: { type: String, required: true },
    ru: { type: String, required: true },
    fr: { type: String, required: true },
  },
  country: {
    en: { type: String, required: true },
    ru: { type: String, required: true },
    fr: { type: String, required: true },
  },
});

export default model<ICountry & Document>("Country", Country);

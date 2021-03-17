import { Schema, Document, model } from "mongoose";
import {
  ICountryInfo,
  Idescription,
  Irate,
  Iimages,
  IlatLon,
} from "../types/CountruInfo";

export const description = new Schema<Idescription & Document>({
  en: { type: String, required: true },
  ru: { type: String, required: true },
  fr: { type: String, required: true },
});

export const rate = new Schema<Irate & Document>({
  nickName: { type: String, required: true },
  rate: { type: String, required: true },
  img: { type: String, required: true },
});

export const images = new Schema<Iimages & Document>({
  name: description,
  img: { type: String, required: true },
  description: description,
  rate: { type: [rate]},
});

export const latLon = new Schema<IlatLon & Document>({
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
});

const CountryInfo = new Schema<ICountryInfo & Document>({
  images: [images],
  description: description,
  country: { type: String, unique: true, required: true },
  video: { type: String, required: true },
  iso: { type: String, unique: true, required: true },
  currency: { type: String, required: true },
  latLon: latLon,
});

export default model<ICountryInfo & Document>("CountryInfo", CountryInfo);

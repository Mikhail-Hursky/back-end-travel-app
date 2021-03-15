import { ObjectId } from "mongodb";

export interface ICountry {
  _id: ObjectId;
  img: string;
  capital: ICapitalOrCountry;
  country: ICapitalOrCountry;
}

export interface ICapitalOrCountry {
    en: string;
    ru: string;
    fr: string;
}

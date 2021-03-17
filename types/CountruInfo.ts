export interface Idescription {
  en: string;
  ru: string;
  fr: string;
}

export interface Irate {
  nickName: string;
  rate: string;
  img: string;
}

export interface Iimages {
  name: Idescription;
  img: string;
  description: Idescription;
  rate: Irate[];
}

export interface IlatLon {
  lat: number;
  lon: number;
}

export interface ICountryInfo {
  imges: Iimages[];
  description: Idescription;
  country: string;
  video: string;
  iso: string;
  currency: string;
  latLon: IlatLon;
}

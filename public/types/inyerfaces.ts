interface Country {
  country: string;
  capital: Capital;
  en: LanguageCountry;
  ru: LanguageCountry;
  fr: LanguageCountry;
  images: Imges[];
}

interface Capital {
  lat: number;
  lon: number;
  name: string;
}

interface LanguageCountry {
  country: string;
  capital: string;
  name: string;
  description: string;
}

interface Imges {
  en: string;
  ru: string;
  fr: string;
  links: string;
}


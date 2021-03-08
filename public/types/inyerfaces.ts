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

/* Страница страны содержит:

фото страны, название страны, название её столицы
краткую информацию о стране
фотогалерею достопримечательностей страны (не меньше шести) с названием и небольшим описанием каждой из них
видео о стране или её достопримечательностях
карту страны на которой маркером отмечена её столица
Также на странице страны есть виджеты*:

информер погоды в столице страны
курс местной валюты по отношению к доллару, евро, рублю
дата и время в столице страны */

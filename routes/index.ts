import { Router } from "express";
const router = Router();

const test = {
  country: { en: "Belarus", ru: "Беларусь", fr: "Biélorussie" },
  capital: {
    en: "Minsk",
    ru: "Минск",
    fr: "Minsk",
    lat: 53.9022,
    lon: 27.5617,
  },
  description: {
    en: "Minsk is capital of Belarus la la la",
    ru: "Минск столица Беларуси ла ла ла",
    fr: "Minsk est la capitale de la Biélorussie la la la",
  },
  images: [
    {
      linkOrFile:
        "https://cdn25.img.ria.ru/images/153122/44/1531224488_0:176:3469:2127_1920x0_80_0_0_c374e188c8e72815c35f2c9e033234ae.jpg.webp",
      en: "Description of the place",
      ru: "Описание места",
      fr: "Description du lieu",
      rate: 3.5,
      comment: [{ name: "Petya", lastName: "Pupkin", description: "Вауууууу" }],
    },
  ],
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(test);
});

export default router;

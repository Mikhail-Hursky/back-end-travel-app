import { Router } from "express";
import Country from "../models/ICountry";

const router = Router();

const test = {
  currency: "EUR",
  country: "Spain",
  latLon: [40.4168, 3.7038],
  description: {
    en:
      "Spain is a state in the extreme southwest of Europe, occupies most of the Iberian Peninsula, the Balearic Islands in the Mediterranean Sea, and the Canary Islands in the Atlantic Ocean. Schematically, it has a shape reminiscent of the stretched skin of a bull. ... The total area of ​​Spain is 504 782 km² (land area - 499 400 km²).",
    ru:
      "Испания — государство на крайнем юго-западе Европы, занимает большую часть Пиренейского полуострова, Балеарские острова в Средиземном море, Канарские острова в Атлантическом океане. Схематически она имеет форму, напоминающую растянутую шкуру быка. ... Общая площадь Испании 504 782 км² (площадь суши — 499 400 км²).",
    fr:
      "L'Espagne est un État situé à l'extrême sud-ouest de l'Europe, occupe la majeure partie de la péninsule ibérique, les îles Baléares dans la mer Méditerranée et les îles Canaries dans l'océan Atlantique. Schématiquement, il a une forme qui rappelle une peau de taureau étirée. ... La superficie totale de l'Espagne est de 504 782 km² (superficie de 499 400 km²).",
  },
  images: [
    {
      name: {
        en: "Altamira Cave",
        ru: "Пещера Альтамира",
        fr: "Grotte d'Altamira",
      },
      img:
        "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Spain-3-The-Cave-of-Altamira-e1491982806964.jpg",
      description: {
        en:
          "Historians see this landmark in Spain as a primitive analogue of the Sistine Chapel. The walls of this unique 270 m long cave are decorated with rock paintings. Seven corridors and a 6-meter-high hall are covered with these ancient paintings that tell about the life of primitive people.",
        ru:
          "В этой достопримечательности Испании историки усматривают первобытный аналог Сикстинской капеллы. Стены этой уникальной пещеры длиной в 270 м украшены наскальными рисунками. Семь коридоров и зал 6-тиметровой высоты покрывают эти древние росписи, повествующие о жизни первобытных людей.",
        fr:
          "Les historiens voient ce monument en Espagne comme un analogue primitif de la chapelle Sixtine. Les murs de cette grotte unique de 270 m de long sont décorés de peintures rupestres. Sept couloirs et une salle de 6 mètres de haut sont recouverts de ces peintures anciennes qui racontent la vie des peuples primitifs.",
      },
      rate: 3.5,
    },
  ],
};

router.get("/", async function (req, res) {
  let dataCountrys;
  await Country.find({}, function (err, country) {
    if (err) res.status(500).json(err);
    else {
      dataCountrys = country;
    }
  });
  res.status(200).json(dataCountrys);
});

router.get("/coutry", async (req, res) => {
  console.log(req.body.country);

  res.json(test);
});

export default router;

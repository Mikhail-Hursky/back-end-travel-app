import { Router } from "express";
import CountryInfo from "../models/ICountryInfo";
import Country from "../models/ICountry";

const router = Router();

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

router.post("/country", async (req, res) => {
  const country = await CountryInfo.findOne({ country: req.body.country });
  if (!country) res.status(403).json({ message: "Country not found" });
  res.status(200).json(country);
});

export default router;

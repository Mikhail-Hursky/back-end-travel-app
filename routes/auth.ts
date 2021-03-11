import { Router } from "express";
import AuthController from "../controllers/AuthController";
import { check } from "express-validator";

const router = Router();

router.post(
  "/registration",
  [
    check("nickName", "Nickname can't be empty").notEmpty(),
    check(
      "password",
      "Password must be more than 6 and less than 15 characters"
    ).isLength({ min: 6, max: 15 }),
  ],
  AuthController.registration
);
router.post("/login", AuthController.login);

export default router;

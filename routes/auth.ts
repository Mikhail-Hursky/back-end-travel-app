import { Router } from 'express';
import AuthController from '../controllers/AuthController'

const router = Router();

router.post('/registration', AuthController.registration);
router.post('/login', AuthController.login);
router.get('/user', AuthController.getUser);

export default router;
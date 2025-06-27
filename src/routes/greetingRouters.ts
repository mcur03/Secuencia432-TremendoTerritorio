import { Router } from 'express';
import getWelcome from '../controllers/greetingController';

const router = Router();

router.get('/', getWelcome);

export default router;
import { Router } from 'express';
import usersController from '../controllers/usersController';
import validator from '../middlewares/validator';
import usersSchemas from '../schemas/usersSchemas';

const router = Router();

router.post('/', validator(usersSchemas.create), usersController.create);

export default router;

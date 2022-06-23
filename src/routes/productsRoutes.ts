import { Router } from 'express';
import productsController from '../controllers/productsController';
import validator from '../middlewares/validator';
import productsSchemas from '../schemas/productsSchemas';

const router = Router();

router.get('/', productsController.getAll);
router.post('/', validator(productsSchemas.create), productsController.create);

export default router;

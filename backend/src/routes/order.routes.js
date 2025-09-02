import { Router } from 'express';
import * as orderController from '../controllers/order.controller.js';

const router = Router();

router.post('/', orderController.createOrder);
router.get('/', orderController.listOrders);
router.get('/:id', orderController.getOrder);

export default router;

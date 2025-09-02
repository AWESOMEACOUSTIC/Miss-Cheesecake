import { Router } from 'express';
import * as cartController from '../controllers/cart.controller.js';

const router = Router();

router.get('/', cartController.getCart);
router.post('/', cartController.addToCart);
router.patch('/:productId', cartController.updateCartItem);
router.delete('/:productId', cartController.removeCartItem);

export default router;

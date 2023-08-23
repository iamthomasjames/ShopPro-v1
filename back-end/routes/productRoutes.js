import express from 'express';
import product from '../data/products.js'
const router= express.Router();
import Product from '../modals/product.js'
import asyncHandler from '../middleware/asyncHandler.js';
import { getAllProduct,getSingleProduct } from '../controllers/productController.js';

router.route('/').get(getAllProduct);
router.route('/:id').get(getSingleProduct);


export default router;
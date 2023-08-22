import express from 'express';
import product from '../data/products.js'
const router= express.Router();
import Product from '../modals/product.js'
import asyncHandler from '../middleware/asyncHandler.js';

router.get('/',
    async(req, res) => {
        const products= await Product.find({});
         res.json(products);
     }
);

router.get('/:id',
    async(req, res) => {
        const product= await Product.findById(req.params.id);
        res.json(product);
    });

export default router;
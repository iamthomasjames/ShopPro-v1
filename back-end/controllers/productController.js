import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../modals/product.js";


const getAllProduct= asyncHandler(async(req, res) => {
    const products= await Product.find({});
     res.json(products);
 })

 const getSingleProduct = asyncHandler( async(req, res) => {
    const product= await Product.findById(req.params.id);
    if(product)
    {
    res.json(product);
    }
else{
    res.status(404);
    throw new Error('Product not found');
}

})

export {getAllProduct,getSingleProduct}
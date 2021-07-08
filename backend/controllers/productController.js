import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc Fetch single products
// @route GET /api/product/${id}
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const id = req.params.id
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    res.status(404).json({ message: 'Product not found' })
  }

  const product = await Product.findById(id)
  if (product) {
    res.json(product)
  }
  else {
    res.status(404)
    throw new Error('Product not found')
  }
})


export {
  getProducts, 
  getProductById
}
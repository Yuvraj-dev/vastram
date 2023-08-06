const express = require('express')
const { getProducts, getProduct, postProduct, updateProduct, deleteProduct } = require('../controllers/ProductController')
const ProductRouter = express.Router()

ProductRouter.post('/', postProduct)
ProductRouter.get('/', getProducts )
ProductRouter.get('/:id', getProduct)
ProductRouter.put('/:id', updateProduct)
ProductRouter.delete('/:id', deleteProduct)

module.exports = ProductRouter
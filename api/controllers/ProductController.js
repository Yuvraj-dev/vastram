const Products = require("../models/ProductModel")

const getProducts = async (req, res, next) => {
    try {
        const products = await Products.find()
        if(products.length===0){
            res
            .status(500)
            .json({status: "failure", error: "No products are present in the database..."})
            return
        }
        res
        .status(201)
        .json({status: "success", data: products})
        return
    } catch (error) {
        res.status(401).json({status: "failure", 'error': error})
    }
    
}

const getProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await Products.findOne({ _id: id})
        if(product.length===0){
            res
            .status(500)
            .json({status: "failure", message: `No product with id: ${id} is present in the database. Please verify the product id...`})
            return
        }
        res
        .status(201)
        .json({status: "success", data: product})
        return 
    } catch (error) {
        res.status(500).json({status: "failure", message: `No product with given ID found: ${error}`})
    }
}

const postProduct = async (req, res, next) => {
    try {
        const { productName, type, price, priority, photos  } = req.body
        const payload = {
        productName: productName,
        type: type,
        price: price,
        priority: priority,
        photos: photos
    }
    const products = await Products.create(payload)
    if(products.length!==0){
        res.status(201).json({status: "success", message: "Product inserted successfully..."})
    }
    } catch (error) {
        res.status(500).json({status: "failure", message: `Product creation failed: ${error}`})
    }
}

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await Products.deleteOne({ _id: id })
        if(product.length!==0){
            res
            .status(201)
            .json({status: "success", message: "Deletion successfull..." })
            return 
        }
    } catch (error) {
        res.status(500).json({status: "failure", message: `Failure in deleting product: ${error}`})
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const payload = req.body
        const product = await Products.updateOne({ _id: id }, { $set: payload })
        if(product.length!==0){
            res
            .status(201)
            .json({status: "success", message: "Update successfull..." })
            return 
        }
    } catch (error) {
        res.status(500).json({status: "failure", message: `Failure in updating product: ${error}`})
    }
}

module.exports = { getProducts, getProduct, postProduct, updateProduct, deleteProduct }
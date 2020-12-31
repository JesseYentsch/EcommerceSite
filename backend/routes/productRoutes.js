const express = require('express')
const router = express.Router()
const {
  getProducts,
  getProductById,
  deleteProduct,
} = require('../controllers/productController')
const { protect, admin } = require('../middleware/authMiddleware')

//@desc Fetch all products
//@route GET /api/products
//@access Public route
router.route('/').get(getProducts)

//@desc Fetch single product
//@route GET /api/products/:id
//@access Public
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

module.exports = router

const express = require('express');
const productsController = require('../controllers/products.controller');
const salesController = require('../controllers/sales.controller');
const middlewares = require('../middlewares/products.middlewares');

const router = express.Router();

router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.post('/products', middlewares.validateName, productsController.createNewProduct);
router.get('/sales', salesController.getAllSales);
router.get('/sales/:id', salesController.getSaleById);
router.put('/products/:id', middlewares.validateName, productsController.updateProduct);

module.exports = router;

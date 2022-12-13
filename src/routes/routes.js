const express = require('express');
const productsController = require('../controllers/products.controller');
const middlewares = require('../middlewares/products.middlewares');

const router = express.Router();

router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.post('/products', middlewares.validateName, productsController.createNewProduct);

module.exports = router;

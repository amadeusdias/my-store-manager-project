const express = require('express');
const productsController = require('../controllers/products.controller');
const salesController = require('../controllers/sales.controller');
const productMiddlewares = require('../middlewares/products.middlewares');
const salesMiddlewares = require('../middlewares/sales.middlewares');

const router = express.Router();

router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.post('/products', productMiddlewares.validateName, productsController.createNewProduct);
router.get('/sales', salesController.getAllSales);
router.get('/sales/:id', salesController.getSaleById);
router.put('/products/:id', productMiddlewares.validateName, productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);
router.delete('/sales/:id', salesController.deleteSale);
router.put('/sales/:id', salesMiddlewares.validadeBody, salesController.updateSale);

module.exports = router;

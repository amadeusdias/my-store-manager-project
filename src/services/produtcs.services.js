const productsModel = require('../models/products.models');

const getAllProducts = async () => {
  const productsList = await productsModel.getAllProducts();
  return productsList;
};

const getProductsById = async (id) => {
  const product = await productsModel.getProductsById(id);
  console.log(product);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: 200, item: product };
};

const createProduct = async (name) => {
  const newProduct = await productsModel.createProduct(name);
  const returnProduct = { id: newProduct, name };
  if (!newProduct) return { type: 404, message: 'Error.' };
  return { type: 201, data: returnProduct };
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
};
const productsModel = require('../models/products.models');

const getAllProducts = async () => {
  const productsList = await productsModel.getAllProducts();
  return productsList;
};

const getProductsById = async (id) => {
  const product = await productsModel.getProductsById(id);
  if (!product) return { type: 404, message: 'Product not found' };
  return { type: 200, item: product };
};

const createProduct = async (name) => {
  const newProduct = await productsModel.createProduct(name);
  const returnProduct = { id: newProduct, name };
  if (!newProduct) return { type: 404, message: 'Error.' };
  return { type: 201, data: returnProduct };
};

const updateProduct = async (name, id) => {
  const updatedId = await productsModel.getProductsById(id);
  if (!updatedId) return { status: 404, message: 'Product not found' };
  const test = await productsModel.updateProduct(name, id);
  if (!test) return { status: 404, message: 'Update Error' };
  const result = await productsModel.getProductsById(id);
  return result; 
};
 
const deleteProduct = async (id) => {
  const findId = await productsModel.getProductsById(id);
  if (!findId) return { status: 404, message: 'Product not found' };
  const deleteP = await productsModel.deleteProduct(id);
  return deleteP;
};

const searchProduct = async (query) => {
  const products = await productsModel.getAllProducts();
  const filter = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
  return filter;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
const productsServices = require('../services/produtcs.services');

const getAllProducts = async (_req, res) => {
  const products = await productsServices.getAllProducts();
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, item, message } = await productsServices.getProductsById(id); 
  if (message) return res.status(type).json({ message });
  return res.status(type).json(item);
};

const createNewProduct = async (req, res) => {
  const { name } = req.body;
  const { type, data, message } = await productsServices.createProduct(name);
  if (message) return res.status(type).json({ message });
  return res.status(type).json(data);
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
};
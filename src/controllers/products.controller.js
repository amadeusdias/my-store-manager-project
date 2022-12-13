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

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const update = await productsServices.updateProduct(name, id);
  if (update.message) return res.status(update.status).json({ message: update.message });
  return res.status(200).json(update);
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
};
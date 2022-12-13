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

module.exports = {
  getAllProducts,
  getProductById,
};
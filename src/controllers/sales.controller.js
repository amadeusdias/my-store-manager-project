const salesServices = require('../services/sales.services');

const getAllSales = async (_req, res) => {
  const products = await salesServices.getAllProducts();
  const { item } = products;
  res.status(200).json(item);
};

module.exports = {
  getAllSales,
};
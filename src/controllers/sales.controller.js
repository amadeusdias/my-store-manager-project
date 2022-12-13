const salesServices = require('../services/sales.services');

const getAllSales = async (_req, res) => {
  const products = await salesServices.getAllSales();
  res.status(200).json(products);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sales = await salesServices.getSaleById(id);
  console.log(sales);
  if (sales.message) return res.status(sales.status).json({ message: sales.message });
  return res.status(sales.status).json(sales.data);
};

module.exports = {
  getAllSales,
  getSaleById,
};
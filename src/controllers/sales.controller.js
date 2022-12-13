const salesServices = require('../services/sales.services');

const getAllSales = async (_req, res) => {
  const products = await salesServices.getAllSales();
  res.status(200).json(products);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const sales = await salesServices.getSaleById(id);
  if (sales.message) return res.status(sales.status).json({ message: sales.message });
  return res.status(sales.status).json(sales.data);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const deleteP = await salesServices.deleteSale(id);
  if (deleteP) return res.status(deleteP.status).json({ message: deleteP.message });
  res.status(204).end();
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const { sale } = req.body;
  const update = await salesServices.updateSale(sale, id);
  console.log(update);
  if (sale.message) return res.status(sale.status).json({ message: sale.message });
  return res.status(200).json(update);
};

module.exports = {
  getAllSales,
  getSaleById,
  updateSale,
  deleteSale,
};
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
  const sale = req.body;
  const update = await salesServices.updateSale(sale, id);
  console.log(update);
  if (update.message) return res.status(update.status).json({ message: update.message });
  return res.status(200).json(update);
};

const insertSale = async (req, res) => {
  const result = await salesServices.insertSale(req.body);
  if (result.status) return res.status(result.status).json({ message: result.message });
  return res.status(201).json(result);
};

module.exports = {
  getAllSales,
  getSaleById,
  updateSale,
  deleteSale,
  insertSale,
};
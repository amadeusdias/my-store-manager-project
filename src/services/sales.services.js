const salesModels = require('../models/sales.models');

const getAllSales = async () => {
  const salesList = await salesModels.getAllSales();
  return salesList;
};

const getSaleById = async (id) => {
  const sale = await salesModels.getSaleById(id);
  if (!sale.length) return { status: 404, message: 'Sale not found' };
  return { status: 200, data: sale };
};

module.exports = {
  getAllSales,
   getSaleById,
};
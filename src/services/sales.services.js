const salesModels = require('../models/sales.models');

const getAllSales = async () => {
  const salesList = await salesModels.getAllSales();
  return salesList;
};

module.exports = {
  getAllSales,
};
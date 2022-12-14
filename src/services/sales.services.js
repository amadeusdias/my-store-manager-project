const salesModels = require('../models/sales.models');
const productModel = require('../models/products.models');

const getAllSales = async () => {
  const salesList = await salesModels.getAllSales();
  return salesList;
};

const getSaleById = async (id) => {
  const sale = await salesModels.getSaleById(id);
  if (!sale.length) return { status: 404, message: 'Sale not found' };
  return { status: 200, data: sale }; // sale é um objeto
};

const deleteSale = async (id) => {
  const findId = await salesModels.getSaleById(id);
  if (!findId.length) return { status: 404, message: 'Sale not found' };
  const deleteP = await salesModels.deleteSale(id);
  return deleteP;
};

const updateSale = async (sales, salesId) => {
  const findId = await salesModels.getId(salesId); 
  if (findId.length === 0) return { status: 404, message: 'Sale not found' };
  const salesCheck = sales.map(async (sale) => {
    const checkId = await productModel.getProductsById(sale.productId);
    return checkId;
  });
  const salesProduct = await Promise.all(salesCheck);
  if (salesProduct.some((i) => !i)) return { status: 404, message: 'Product not found' };
  const updateS = sales.map(async (s) => {
    const check = await salesModels.updateSale(s, salesId);
    return check;
  });
  await Promise.all(updateS);
  const result = await salesModels.getId(salesId);
  console.log(result);
  return { saleId: salesId,
    itemsUpdated: result,
  };
};

module.exports = {
  getAllSales,
  getSaleById,
  updateSale,
   deleteSale,
};
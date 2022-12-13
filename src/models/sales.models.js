const conn = require('./connection');

const getAllSales = async () => {
  const [sales] = await conn.execute(
    `SELECT vendas.id AS saleId, vendas.date AS date, produtoVenda.product_id AS productId, 
     produtoVenda.quantity AS quantity
     FROM 
     StoreManager.sales AS vendas 
     INNER JOIN StoreManager.sales_products AS produtoVenda ON produtoVenda.sale_id = vendas.id 
     ORDER BY vendas.id`,
  );
  return sales;
};

module.exports = {
  getAllSales,
};
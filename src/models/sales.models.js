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

const getSaleById = async (id) => {
  const [sale] = await conn.execute(
    `SELECT venda.date AS date,
    produto.product_id AS productId,
    produto.quantity AS quantity
FROM StoreManager.sales AS venda
    INNER JOIN 
    StoreManager.sales_products AS produto ON produto.sale_id = venda.id
    WHERE sale_id = ?;`,
  //  'SELECT product_id, quantity FROM sales_products WHERE sale_id = ?',
    [id],
  );
  return sale;
};

const getId = async (id) => {
  const [sale] = await conn.execute(
    'SELECT product_id AS productId, quantity FROM sales_products WHERE sale_id = ?', [id],
  );
  return sale;
};

const deleteSale = async (id) => {
  await conn.execute(
    'DELETE FROM sales WHERE id = ?', [id],
  );
};

const updateSale = async ({ quantity, productId }, salesId) => {
  await conn.execute(
    'UPDATE sales_products SET quantity = ? WHERE product_id = ? AND sale_id =? ',
    [quantity, productId, salesId],
  );
};

module.exports = {
  getAllSales,
  getSaleById,
  updateSale,
  deleteSale,
  getId,
};
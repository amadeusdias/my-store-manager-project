const conn = require('./connection');

const getAllProducts = async () => {
  const [products] = await conn.execute(
    'SELECT * FROM products',
  );
  return products;
};

const getProductsById = async (id) => {
  const [[produtc]] = await conn.execute(
    'SELECT * FROM products WHERE id=?',
    [id],
  );
  return produtc;
};

module.exports = {
  getAllProducts,
  getProductsById,
};

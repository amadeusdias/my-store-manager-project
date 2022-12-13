const validadeBody = (req, res, next) => {
  const { productId, quantity } = req.body;
  if (productId === undefined) {
    return res.status(404).json({ message: '"productId" is required' });
  }
  next();
};

module.exports = { validadeBody };
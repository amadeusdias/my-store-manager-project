const Joi = require('joi');
const status = require('../utils/status');

const validadeBody = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
}).required().messages({
  'any.required': '{#label} is required',
  'number.exist': '{#label} not found',
  'number.min': '{#label} must be greater than or equal to 1',
});

const validate = (req, res, next) => {
  const sales = req.body;
  const checkSales = sales.find((s) => validadeBody.validate(s).error);
  if (checkSales) {
    const { error } = validadeBody.validate(checkSales);
    if (error) {
      return res.status(status[error.details[0].type]).json({ message: error.details[0].message });
    }
  }
  next();
};

module.exports = { validate };
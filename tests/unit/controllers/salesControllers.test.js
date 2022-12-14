const sinon = require('sinon')
const chai = require('chai');
const sinonChai = require('sinon-chai');
const salesModel = require('../../../src/models/sales.models');
const salesServices = require('../../../src/services/sales.services');
const salesControllers = require('../../../src/controllers/sales.controller');
const mock = require('../mocks');
const { expect } = require('chai');

chai.use(sinonChai);

describe('testa a camada controller de sales', function () {
  afterEach(sinon.restore)

  it('retorna um array de vendas', async function () {
    const req = {};
    const res = {};
    res.status = sinon.stub().returnsThis(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesServices, 'getAllSales').resolves(mock.salesMock);
    await salesControllers.getAllSales(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.salesMock);
  });

  it('retorna uma venda especifica', async function () {
    const req = {params: { id: 1 }};
    const res = {};
    res.status = sinon.stub().returnsThis(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesServices, 'getSaleById').resolves(mock.salesMock[0]);
    await salesControllers.getSaleById(req, res)
    sinon.assert.calledWith(res.status);
    sinon.assert.calledWith(res.json);
  })
  
});


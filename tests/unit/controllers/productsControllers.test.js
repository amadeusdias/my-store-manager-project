const sinon = require('sinon')
const chai = require('chai');
const sinonChai = require('sinon-chai');
productModels = require('../../../src/models/products.models');
productServices = require('../../../src/services/produtcs.services');
productControllers = require('../../../src/controllers/products.controller');
const { expect } = require('chai');
const mock = require('../mocks');

chai.use(sinonChai);


describe('testa a camada controller', function () {
   afterEach(sinon.restore)

  it('retorna um array de produtos', async function () {
    //arrange
    const req = {};
    const res = {};
    res.status = sinon.stub().returnsThis(res);
    res.json = sinon.stub().returns();
    sinon.stub(productServices, 'getAllProducts').resolves(mock.productsMock);
    await productControllers.getAllProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.productsMock);
  });
  it('Quando o controller getProductsById é chamado', async function() {
    const req = {params: { id: 1 }};
    const res = {};
    res.status = sinon.stub().returnsThis(res);
    res.json = sinon.stub().returns();
    sinon.stub(productServices, 'getProductsById').resolves(mock.productsMock[0]);
    await productControllers.getProductById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.productsMock[0]);
});
});


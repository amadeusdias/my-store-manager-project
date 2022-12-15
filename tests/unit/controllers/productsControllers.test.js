const sinon = require('sinon')
const chai = require('chai');
const sinonChai = require('sinon-chai');
productModels = require('../../../src/models/products.models');
productServices = require('../../../src/services/produtcs.services');
productControllers = require('../../../src/controllers/products.controller');
const { expect } = require('chai');
const mock = require('../mocks');

chai.use(sinonChai);


describe('testa a camada controller de products', function () {
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

   it('Valida se é possível listar apenas um produto pelo id', async function () {
    const req = { params: { id: 3 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productServices, 'getProductsById').resolves(mock.productsMock[2]);
     await productControllers.getProductById(req, res);

    sinon.assert.calledWith(res.status);
    sinon.assert.calledWith(res.json);
   });
  
  it('Valida se é possível criar um novo produto', async function () {
    const req = { body: { name: 'teste' } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productServices, 'createProduct').resolves(4);
    await productControllers.createNewProduct(req, res);

    sinon.assert.calledWith(res.status);
    sinon.assert.calledWith(res.json);
  });

  it('Valida se é possível atualizar um produto', async function () {
    const req = { body: { name: 'teste' }, params: { id: 4 } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productServices, 'updateProduct').resolves(4);
    await productControllers.updateProduct(req, res);

    sinon.assert.calledWith(res.status);
    sinon.assert.calledWith(res.json);
  });

  // it('Valida se é possível deletar um produto', async function () {
  //   const req = { params: { id: 4 } };
  //   const res = {};
  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productServices, 'deleteProduct').resolves();
  //   await productControllers.deleteProduct(req, res);

  //   expect(res.status).to.have.been.calledWith(204);
  //   expect(res.end());
  // } );
});



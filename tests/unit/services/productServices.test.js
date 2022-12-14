const sinon = require('sinon')
productModels = require('../../../src/models/products.models');
productServices = require('../../../src/services/produtcs.services');
const { expect } = require('chai');
const mock = require('../mocks');

describe('testando se a camada service', function() {
  afterEach(sinon.restore);

  it('retorna um array com todos os produtos', async function() {
    sinon.stub(productModels, 'getAllProducts').resolves(mock.productsMock);
    const products = await productServices.getAllProducts();
    expect(products).to.be.deep.equal(mock.productsMock);
  });

  it('e se o array contém três produtos', async function () {
    sinon.stub(productModels, 'getAllProducts').resolves(mock.productsMock);
    const products = await productServices.getAllProducts();
    expect(products).to.have.lengthOf(3);
  });

  it('retorna um produto por id', async function() {
    sinon.stub(productModels, 'getProductsById').resolves(mock.productsMock[0]);
    const product = await productServices.getProductsById(1);
    expect(product).to.be.deep.equal({
      type: 200,
      item: mock.productsMock[0],
    });
  }); 
});
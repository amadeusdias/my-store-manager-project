const sinon = require('sinon')
const connection = require('../../../src/models/connection');
productModels = require('../../../src/models/products.models');
const { expect } = require('chai');
const mock = require('../mocks');

describe('Testa a camada model de products', function() {
  afterEach(sinon.restore);
  it('se a função getAll retorna um array de produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mock.productsMock]);
    const products = await productModels.getAllProducts();
    expect(products).to.be.deep.equal(mock.productsMock);
  });

  it('se o produto é retornado por id ao chamar o  getProductsById', async function () {
    sinon.stub(connection, 'execute').resolves([mock.productsMock]);
    const product = await productModels.getProductsById(1);
    expect(product).to.be.deep.equal(mock.productsMock[0]);
  });
}); 
    

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

  it('se o produto é criado ao chamar o createProduct', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    const product = await productModels.createProduct({name: 'teste'});
    expect(product).to.be.equal(4);
  });

  it('se o produto é atualizado ao chamar o updateProduct', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const product = await productModels.updateProduct({ name: 'teste' }, 1);
    expect(product).to.be.equal(1);
  });

  it('se o produto é deletado ao chamar o deleteProduct', async function () {
    sinon.stub(connection, 'execute').resolves();
    const product = await productModels.deleteProduct(1);
    expect(product).to.be.equal(undefined);
  });
}); 
    

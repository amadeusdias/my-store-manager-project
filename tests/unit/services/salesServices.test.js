const sinon = require('sinon')
salesModels = require('../../../src/models/sales.models');
salesServices = require('../../../src/services/sales.services');
const { expect } = require('chai');
const mock = require('../mocks');

describe('testando se a camada service de sales', function () {
  afterEach(sinon.restore);

  it('retorna um array com todas as vendas', async function () {
    sinon.stub(salesModels, 'getAllSales').resolves(mock.salesMock);
    const sales = await salesServices.getAllSales();
    expect(sales).to.be.deep.equal(mock.salesMock);
  });
}); 
// });

  //  it('retorna uma venda por id', async function() {
  //   sinon.stub(salesModels, 'getSaleById').resolves(mock.salesMock[1]);
  //   const sales = await salesServices.getSaleById(2);
  //   expect(sales).to.be.deep.equal({
  //     status: 200,
  //     message: mock.salesMock[0],
  //   });
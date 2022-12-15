const sinon = require('sinon');
const chai = require('chai');
const salesModel = require('../../../src/models/sales.models');
const connection = require('../../../src/models/connection');
const { expect } = require('chai');
const {insertStatusData,insertSalesMock, resultModelSales} = require('../mocks');
const mock = require('../mocks');

describe('testa a camada Model de sales', function () {
  afterEach(sinon.restore);
  it('se a função retorna uma lista de todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([mock.salesMock]);
    const sales = await salesModel.getAllSales();
      expect(sales).to.be.deep.equal(mock.salesMock);
  })
  it('se a venda é retornada por id ao chamar o getSalesById', async function () {
    sinon.stub(connection, 'execute').resolves([mock.salesMock[0]]);
    const sale = await salesModel.getSaleById(1);
    expect(sale).to.be.deep.equal(mock.salesMock[0])
  });

  it('se o getId retorna um objeto contendo id e quantidade da venda', async function () {
    sinon.stub(connection, 'execute').resolves([mock.salesProducts[3]])
    const sale = await salesModel.getId(1);
    expect(sale).to.be.deep.equal(mock.salesProducts[3]);
  })

  // it('se a venda é criada ao chamar o insertSale', async function () {
  //   sinon.stub(connection, 'execute').resolves([insertStatusData]);
  //   const sale = await salesModel.insertSale({product_id: 1, quantity: 1});
  //   expect(sale).to.be.deep.equal(insertStatusData);
  // }
  // );

  it('se a venda é deletada ao chamar o  deleteSale', async function() {
    sinon.stub(connection, 'execute').resolves();
    const sale = await salesModel.deleteSale(1);
    expect(sale).to.be.equal(undefined);
  })
})

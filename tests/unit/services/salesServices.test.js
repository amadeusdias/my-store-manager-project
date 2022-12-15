const sinon = require('sinon')
salesModels = require('../../../src/models/sales.models');
salesServices = require('../../../src/services/sales.services');
const { expect } = require('chai');
// const mock = require('../mocks');
const {salesMock, allSalesArrayMock} = require('../mocks');

describe('testando se a camada service de sales', function () {
  afterEach(sinon.restore);

  it('retorna um array com todas as vendas', async function () {
    sinon.stub(salesModels, 'getAllSales').resolves(salesMock);
    const sales = await salesServices.getAllSales();
    expect(sales).to.be.deep.equal(salesMock);
  });

  // it('retorna uma venda especifica', async function () {
  //   sinon.stub(salesModels, 'getSaleById').resolves([[allSalesArrayMock[0]]]);
  //   const sales = await salesServices.getSaleById(1);
  //   expect(sales).to.equal({
  //     status: 200,
  //     data:[salesMock],
  //   })
  // });

  //   it("se getSalesById um produtos pelo id", async () => {
  //   sinon.stub(salesModels, "getSaleById").resolves([salesMock]);
  //   const result = await salesServices.getSaleById(1);
  //   expect(result).to.be.deep.equal(
  //     {
  //   status: 200,
  //   data: {date: "2022-12-14T22:15:57.000Z",
  //       productId: 3,
  //       quantity: 15,
  //     }
  // }
  //       );

  it('deleta uma venda', async function () {
    sinon.stub(salesModels, 'deleteSale').resolves();
    const sales = await salesServices.deleteSale(1);
    expect(sales).to.be.equal(undefined);
  });
});
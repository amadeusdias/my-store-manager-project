const productsMock = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const productMock = {
    "id": 4,
    "name": "Capa do DR.Estranho"
}
  
const newProductMock = {
  "id": 4,
  "name": "teste"
}

const salesMock = [
  {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
   {
    "saleId": 1,
    "date": "2022-11-17T21:43:26.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
];

const allSalesArrayMock = [
  [
    {
    "saleId": 1,
    "date": "2021-09-09T04:54:29.000Z",
    "productId": 1,
    "quantity": 2
  },
   {
    "saleId": 1,
    "date": "2022-11-17T21:43:26.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2021-09-09T04:54:54.000Z",
    "productId": 2,
    "quantity": 2
  }
  ],
  null
];

insertSalesMock = [
    {
      "productId": 1,
      "quantity": 1
    },
    {
      "productId": 2,
      "quantity": 5
    }
  ]


const insertStatusData = [
  {
    "fieldCount": 0,
    "affectedRows": 1,
    "insertId": 1,
    "info": "",
    "serverStatus": 2,
    "warningStatus": 0
  },
  null
];

const resultModelSales = {
  id: 1,
  itemsSold: [{
    productId: 1,
    quantity: 1
  },
  {
    productId: 2,
    quantity: 5,
    }]
}
  
const salesProducts = [
  {
    sale_id: 1,
    product_id: 1,
    quantity: 5,
  },
  {
    sale_id: 1,
    product_id: 2,
    quantity: 10,
  },
  {
    sale_id: 2,
    product_id: 3,
    quantity: 15,
  },
  {
    sale_id: 3,
    product_id: 1,
    quantity: 1,
  }
]

module.exports = {
  productsMock,
  salesMock,
  newProductMock,
  insertStatusData,
  resultModelSales,
  salesProducts,
  allSalesArrayMock,
};
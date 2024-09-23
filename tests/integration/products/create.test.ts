import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model'
import app from '../../../src/app'

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Ao receber dados válidos, retorne o produto criado', async function () {
    // Arrange
    const httpRequestBody = productMock.validProductBody
    const mockFindOneReturn = ProductModel.build(productMock.validProductBody)
    sinon.stub(ProductModel, 'create').resolves(mockFindOneReturn);

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.deep.eq(httpRequestBody);
  });
});

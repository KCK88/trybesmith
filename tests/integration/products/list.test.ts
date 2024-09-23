import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model'
import app from '../../../src/app'
import { Product } from '../../../src/types/Product';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Lista todos os produtos cadastrados', async function () {
     // Arrange
     const mockReturn = ProductModel.bulkBuild(productMock.listReturn)
     sinon.stub(ProductModel, 'findAll').resolves(mockReturn);
 
     // Act
     const httpResponse = await chai.request(app).get('/products').send();
 
     // Assert
     expect(httpResponse.status).to.equal(200);
     expect(httpResponse.body).to.deep.eq(mockReturn);
  })
});

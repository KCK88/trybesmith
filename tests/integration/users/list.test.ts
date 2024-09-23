import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import userMock from '../../mocks/user.mock';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('GET /users', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Lista todos os usuários e seus produtos cadastrados', async function () {
    // Arrange
    const mockUserReturn = UserModel.bulkBuild(userMock.listUserReturn)
    sinon.stub(UserModel, 'findAll').resolves(mockUserReturn);

    const mockProducReturn = ProductModel.bulkBuild(productMock.listReturn)
    sinon.stub(ProductModel, 'findAll').resolves(mockProducReturn);

    
    // Act
    const httpResponse = await chai.request(app).get('/users').send();
    console.log(httpResponse.body);
 
    
    // Assert
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.eq(userMock.userAndProducts);
 })
});

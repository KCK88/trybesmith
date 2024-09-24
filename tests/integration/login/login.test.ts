import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Ao receber dados válidos, realiza login', async function () {
    // Arrange
    const httpRequestBody = loginMock.validLoginBody
    const mockReturn = UserModel.build(httpRequestBody)
    sinon.stub(UserModel, 'findOne').resolves(mockReturn);
    
    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);
    console.log('==================', httpResponse.body);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.eq({message: "Username or password invalid"});
  });
});

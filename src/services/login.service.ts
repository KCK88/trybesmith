import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { HttpMap } from '../types/HTTPMap';
import jwtUtil, { PayloadObject } from '../utils/jwt.util';

async function userLogin(username: string, password: string): 
Promise<HttpMap> {
  const login = await UserModel.findOne({ where: { username } });

  if (!login || !bcrypt.compareSync(password, login.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const payload: PayloadObject = {
    id: login.dataValues.id,
    username: login.dataValues.username,
  };
  const token = jwtUtil.create(payload);

  return { status: 'SUCCESSFUL', data: { token } };
}

export default {
  userLogin,
};

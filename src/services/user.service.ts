import ProductModel from '../database/models/product.model';
import UserModel, { UserSequelizeModel } from '../database/models/user.model';
import { Users } from '../types/User';

async function listUsers(): Promise<Users[] | UserSequelizeModel[]> {
  const usersFromModel = await UserModel.findAll();
  const productsFromModel = await ProductModel.findAll();

  const products = productsFromModel.map((product) => product.dataValues);
  
  const users = usersFromModel.map(((user) => {
    const mapedUser = {
      username: user.dataValues.username,
      productIds: products
        .filter((product) => product.userId === user.dataValues.id)
        .map((ids) => ids.id),
    };
    return mapedUser;
  }));
  return users;
}
export default {
  listUsers,
};
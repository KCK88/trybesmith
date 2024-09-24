import { Request, Response } from 'express';
import productService from '../services/product.service';
import userService from '../services/user.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function createProduct(req: Request, res: Response) {
  const productData = req.body;
  const user = await userService.findUser(productData.userId);
  if (!user) {
    return res.status(422).json({ message: '"userId" not found' });
  }
  const newProduct = await productService.createProduct(productData);
  const { status, data } = newProduct;
  return res.status(mapStatusHTTP(status)).json(data);
}

async function listProducts(_req: Request, res: Response) {
  const list = await productService.listProducts();
  return res.status(200).json(list);
}
export default {
  createProduct,
  listProducts,
};
import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response) {
  const productData = req.body;
  const newProduct = await productService.createProduct(productData);
  return res.status(201).json(newProduct);
}

async function listProducts(_req: Request, res: Response) {
  const list = await productService.listProducts();
  return res.status(200).json(list);
}
export default {
  createProduct,
  listProducts,
};
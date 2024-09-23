import { Request, Response } from 'express';
import productService from '../services/product.service';

async function createProduct(req: Request, res: Response) {
  const productData = req.body;
  const newProduct = await productService.createProduct(productData);
  return res.status(201).json(newProduct);
}

export default {
  createProduct,
};
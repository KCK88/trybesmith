import { Model } from 'sequelize';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { HttpMap } from '../types/HTTPMap';

async function createProduct(product: Product): Promise<HttpMap> {
  const newProduct = await ProductModel.create(product);
  return { status: 'CREATED', data: newProduct };
}

async function listProducts(): Promise<Model<Product, ProductInputtableTypes>[]> {
  const list = await ProductModel.findAll();
  return list;
}

export default {
  createProduct,
  listProducts,
};
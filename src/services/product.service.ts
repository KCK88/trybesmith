import { Model } from 'sequelize';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function createProduct(product: Product): Promise<Model<Product, ProductInputtableTypes>> {
  const newProduct = await ProductModel.create(product);
  return newProduct;
}

async function listProducts(): Promise<Model<Product, ProductInputtableTypes>[]> {
  const list = await ProductModel.findAll();
  return list;
}

export default {
  createProduct,
  listProducts,
};
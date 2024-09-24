import { Router } from 'express';
import productController from '../controllers/product.controller';
import userValidade from '../middleware/userValidade';

const productRouter = Router();

productRouter.post(
  '/products', 
  userValidade.productName, 
  userValidade.productPrice, 
  userValidade.productUserId,
  productController.createProduct,
);
productRouter.get('/products', productController.listProducts);

export default productRouter;
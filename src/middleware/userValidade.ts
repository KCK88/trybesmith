import { Request, Response, NextFunction } from 'express';

function productName(req: Request, res: Response, next: NextFunction):
Response<Record<string, undefined>> | undefined {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  } if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  } if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
}

function productPrice(req: Request, res: Response, next: NextFunction):
Response<Record<string, undefined>> | undefined {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  } if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  } if (price.length < 3) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }
  next();
}

function productUserId(req: Request, res: Response, next: NextFunction):
Response<Record<string, undefined>> | undefined {
  const productData = req.body;
  if (!productData.userId) {
    return res.status(400).json({ message: '"userId" is required' });
  } if (typeof productData.userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  } 
  next();
}

export default {
  productName,
  productPrice,
  productUserId,
};
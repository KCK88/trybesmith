import { Router } from 'express';
import userController from '../controllers/userController';

const userRouter = Router();

userRouter.get('/users', userController.listUsers);

export default userRouter;
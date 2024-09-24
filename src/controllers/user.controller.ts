import { Request, Response } from 'express';
import userService from '../services/user.service';

async function listUsers(_req: Request, res: Response) {
  const list = await userService.listUsers();
  return res.status(200).json(list);
}

export default {
  listUsers,
};
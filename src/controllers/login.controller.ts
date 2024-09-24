import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function userLogin(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!password || !username) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  const login = await loginService.userLogin(username, password);
  const { status, data } = login;
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  userLogin,
};
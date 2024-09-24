import jwt from 'jsonwebtoken';

export type PayloadObject = {
  id: number,
  username: string,
};

const JWT_SECRET: string = process.env.JWT_SECRET || 'segredo';

const create = (payload: PayloadObject): string => {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

const verify = (token: string): PayloadObject => {
  const payload = jwt.verify(token, JWT_SECRET) as PayloadObject;
  return payload;
};

export default {
  create,
  verify,
};
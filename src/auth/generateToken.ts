import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// const { JWT_SECRET } = process.env;
const JWT_SECRET = '123456789';

const generateToken = (payload: string): string => {
  const newToken = jwt.sign({ username: payload }, JWT_SECRET, {
    expiresIn: '15m',
  });

  return newToken;
};

export default generateToken;

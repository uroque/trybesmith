import { NextFunction, Request, Response } from 'express';
import usersService from '../services/usersService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, classe, level, password } = req.body;
    const newUser = { username, classe, level, password };

    const newUserToken = await usersService.create(newUser);

    return res.status(201).json(newUserToken);
  } catch (err) {
    next(err);
  }
};

export = {
  create,
};

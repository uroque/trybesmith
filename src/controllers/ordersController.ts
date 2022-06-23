import { NextFunction, Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const ordersList = await ordersService.getAll();

    return res.status(200).json(ordersList);
  } catch (err) {
    next(err);
  }
};

export = {
  getAll,
};

import { NextFunction, Request, Response } from 'express';
import productsServices from '../services/productsServices';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const productsList = await productsServices.getAll();

    return res.status(200).json(productsList);
  } catch (err) {
    next(err);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, amount } = req.body;
    const newProduct = { name, amount };

    const createdProduct = await productsServices.create(newProduct);

    return res.status(201).json(createdProduct);
  } catch (err) {
    next(err);
  }
};

export = {
  getAll,
  create,
};

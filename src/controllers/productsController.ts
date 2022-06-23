import { Request, Response } from 'express';
import productsServices from '../services/productsServices';

const getAll = async (req: Request, res: Response) => {
  const productsList = await productsServices.getAll();

  return res.status(200).json(productsList);
};

export = {
  getAll,
};

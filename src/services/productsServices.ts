import { IProduct } from '../interfaces';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<IProduct[]> => {
  const productsList = await productsModel.getAll();

  return productsList;
};

export = {
  getAll,
};

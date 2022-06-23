import { INewProduct, IProduct } from '../interfaces';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<IProduct[]> => {
  const productsList = await productsModel.getAll();

  return productsList;
};

const create = async (newProduct: INewProduct) => {
  const createdProduct = await productsModel.create(newProduct);

  return createdProduct;
};

export = {
  getAll,
  create,
};

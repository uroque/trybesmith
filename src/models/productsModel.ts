import { IProduct } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products ORDER BY id';
  const [products] = await connection.execute(query);

  return products as IProduct[];
};

export = {
  getAll,
};

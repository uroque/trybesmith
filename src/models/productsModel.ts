import { ResultSetHeader } from 'mysql2';
import { IProduct, INewProduct } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products ORDER BY id';
  const [products] = await connection.execute(query);

  return products as IProduct[];
};

const create = async (newProduct: INewProduct): Promise<IProduct> => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';

  const { name, amount } = newProduct;

  const [createdProduct] = await connection.execute<ResultSetHeader>(query, [name, amount]);

  const { insertId } = createdProduct;

  return { id: insertId, name, amount };
};

const getByOrderId = async (orderId: number): Promise<IProduct[]> => {
  const query = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?;';

  const [productsList] = await connection.execute(query, [orderId]);

  return productsList as IProduct[];
};

export = {
  getAll,
  create,
  getByOrderId,
};

import { IOrder } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IOrder[]> => {
  const query = 'SELECT * FROM Trybesmith.Orders';

  const [ordersList] = await connection.execute(query);

  return ordersList as IOrder[];
};

export = {
  getAll,
};

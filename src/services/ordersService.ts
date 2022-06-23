import { IOrder } from '../interfaces';
import ordersModel from '../models/ordersModel';
import productsModel from '../models/productsModel';

const getAll = async (): Promise<IOrder[]> => {
  const ordersList = await ordersModel.getAll();

  const resolve = await Promise.all(
    ordersList.map(async (order) => {
      const productsByOrder = await productsModel.getByOrderId(order.id);

      const productsIds = productsByOrder.map((product) => product.id);

      return {
        id: order.id,
        userId: order.userId,
        productsIds,
      };
    }),
  );

  return resolve;
};

export = {
  getAll,
};

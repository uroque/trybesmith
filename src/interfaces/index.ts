export interface ErrorHandler extends Error {
  status?: number;
}

export interface IProduct {
  id: number;
  name: string;
  amount: string;
  orderId?: number;
}

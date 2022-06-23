export interface ErrorHandler extends Error {
  status?: number;
}

export interface INewProduct {
  name: string;
  amount: string;
}

export interface IProduct extends INewProduct {
  id: number;
  orderId?: number;
}

export interface INewUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

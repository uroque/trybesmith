import { Resolver } from 'dns';
import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../interfaces';

const errorMidleware = (error: ErrorHandler, req: Request, res: Response, _next: NextFunction) => {
  if (error.status) {
    return res.status(error.status).json(error.message);
  }
};

export default errorMidleware;

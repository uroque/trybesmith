import express from 'express';

import productsRoutes from './routes/productsRoutes';
import usersRoutes from './routes/usersRoutes';
import ordersRoutes from './routes/ordersRoutes';
import errorMidleware from './middlewares/error';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);
app.use(errorMidleware);

export default app;

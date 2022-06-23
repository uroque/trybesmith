import express from 'express';

import productsRoutes from './routes/productsRoutes';
import errorMidleware from './middlewares/error';

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use(errorMidleware);

export default app;

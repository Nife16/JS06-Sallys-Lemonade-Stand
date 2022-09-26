import { Router } from 'express';
import userRouter from './user-router';
import addressRouter from './address-routes';
import productRouter from './product-routes';
import rewardsRouter from './rewards-routes';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/address', addressRouter);
baseRouter.use('/product', productRouter);
baseRouter.use('/rewards', rewardsRouter);


// *** Export default **** //

export default baseRouter;

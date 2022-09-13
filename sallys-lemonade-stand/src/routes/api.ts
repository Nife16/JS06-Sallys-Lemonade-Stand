import { Router } from 'express';
import userRouter from './user-router';
import addressRouter from './address-routes';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/address', addressRouter);


// *** Export default **** //

export default baseRouter;

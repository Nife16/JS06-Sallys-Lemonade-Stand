import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { InvalidIDError } from '@shared/errors';
import { IProduct } from '@models/product';
import productService from '@services/product-service';



// **** Variables **** //

// Misc
const router = Router();
const { CREATED, OK, BAD_REQUEST } = StatusCodes;

// **** Routes **** //

/**
 * Get address by id
 */
 router.get("/getProductById/:id", async (req: Request, res: Response) => {

    const {id} = req.params
    productService.getById(Number(id)).then((product: IProduct) => {
        return res.status(OK).json({product});
    }).catch((error: Error) => {
        console.log(error)
        return res.status(BAD_REQUEST).json({message: InvalidIDError.Msg });
    })
});

export default router
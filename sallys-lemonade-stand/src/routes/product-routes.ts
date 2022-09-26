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
 * Get product by id
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

/**
 * Create product
 */
 router.post("/createProduct", async (req: Request, res: Response) => {

    const {product} = req.body

    const createdProduct = await productService.createProduct(product)

    return res.status(CREATED).json({createdProduct});
});

/**
 * Update product
 */
 router.post("/updateProduct", async (req: Request, res: Response) => {

    const {product} = req.body

    const updatedProduct = await productService.updateProduct(product)

    return res.status(OK).json({updatedProduct});
});

/**
 * Purchase product
 */
 router.post("/purchaseProduct", async (req: Request, res: Response) => {

    const {product, rewards} = req.body

    const updatedProduct = await productService.purchaseProduct(product, rewards)

    return res.status(OK).json({product: updatedProduct});
});

/**
 * Delete product
 */
 router.delete("/deleteProduct/:id", async (req: Request, res: Response) => {

    const {id} = req.params

    await productService.deleteProduct(Number(id))

    return res.status(OK).json({message: "Terminated"});
});

export default router
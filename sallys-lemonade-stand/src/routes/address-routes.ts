import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { InvalidIDError } from '@shared/errors';
import { IAddress } from '@models/address';
import addressService from '@services/address-service';
import userService from '@services/user-service';


// **** Variables **** //

// Misc
const router = Router();
const { CREATED, OK, BAD_REQUEST } = StatusCodes;

// **** Routes **** //

/**
 * Get address by id
 */
 router.get("/getAddressById/:id", async (req: Request, res: Response) => {

    const {id} = req.params
    addressService.getById(Number(id)).then((address: IAddress) => {
        return res.status(OK).json({address});
    }).catch((error: Error) => {
        console.log(error)
        return res.status(BAD_REQUEST).json({message: InvalidIDError.Msg });
    })
});

/**
 * Create Address
 */
 router.post("/create", async (req: Request, res: Response) => {

    const {address, userId} = req.body

    const savedAddress = await addressService.createAddress(address, Number(userId));
    
    return res.status(OK).json({address: savedAddress});
});

/**
 * Update Address
 */
 router.post("/update", async (req: Request, res: Response) => {

    const { address } = req.body
    
    const updatedAddress = await addressService.updateAddress(address);
    
    return res.status(OK).json({address: updatedAddress});
});

export default router
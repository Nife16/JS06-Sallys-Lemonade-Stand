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
 router.post("/create/:userId", async (req: Request, res: Response) => {

    const {userId} = req.params
    const {address} = req.body

    const savedAddress = await addressService.createAddress(address);

    const user = userService.getById(userId)

    user.address = savedAddress

    userService.save(user)
    
    return res.status(OK).json({message: "created"});
});

export default router
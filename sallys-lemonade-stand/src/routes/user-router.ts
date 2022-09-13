import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import userService from '@services/user-service';
import { ParamMissingError } from '@shared/errors';


// **** Variables **** //

// Misc
const router = Router();
const { CREATED, OK } = StatusCodes;



// **** Routes **** //

/**
 * Get all users
 */
router.get("/getAll", async (_: Request, res: Response) => {
    const users = await userService.getAll();
    return res.status(OK).json({users});
});

/**
 * Sign Up User
 */
 router.post("/signUp", async (req: Request, res: Response) => {

    const {user} = req.body

    await userService.signUp(user);
    return res.status(OK).json({message: "created"});
});



// **** Export default **** //

export default router;

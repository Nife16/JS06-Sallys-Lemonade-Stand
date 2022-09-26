import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import { InvalidIDError } from '@shared/errors';
import { IRewards } from '@models/rewards';
import rewardsService from '@services/rewards-service';



// **** Variables **** //

// Misc
const router = Router();
const { CREATED, OK, BAD_REQUEST } = StatusCodes;

// **** Routes **** //

/**
 * Get product by id
 */
 router.get("/getRewardsById/:id", async (req: Request, res: Response) => {

    const {id} = req.params
    rewardsService.getById(Number(id)).then((rewards: IRewards) => {
        return res.status(OK).json({rewards});
    }).catch((error: Error) => {
        console.log(error)
        return res.status(BAD_REQUEST).json({message: InvalidIDError.Msg });
    })
});

/**
 * Create product
 */
 router.post("/createRewards", async (req: Request, res: Response) => {

    const {user} = req.body

    const rewards = await rewardsService.createRewards(user.id)

    return res.status(OK).json({rewards});
});

/**
 * Update product
 */
 router.post("/updateRewards", async (req: Request, res: Response) => {

    const {rewards} = req.body

    const updatedRewards = await rewardsService.updateRewards(rewards)

    return res.status(OK).json({updatedRewards});
});

/**
 * Delete product
 */
 router.delete("/deleteProduct/:id", async (req: Request, res: Response) => {

    const {id} = req.params

    await rewardsService.deleteRewards(Number(id))

    return res.status(OK).json({message: "Terminated"});
});

export default router
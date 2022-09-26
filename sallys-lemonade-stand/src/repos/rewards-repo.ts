import { IRewards } from "@models/rewards";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


// **** Functions **** //

/**
 * Get one product
 */
async function getById(id: number): Promise<IRewards> {
  
  return await prisma.rewards.findUnique({
    where: {
        id: id
    }
  })

}

/**
 * Create product
 */
 async function create(userId: number): Promise<IRewards> {
  
  return await prisma.rewards.create({
    data: {
        rewardPoints: 0,
        reedemablePoints: 0,
        userId: userId
    }
  })

}

/**
 * Update product
 */
 async function update(rewards: IRewards): Promise<IRewards> {
  
  return await prisma.rewards.update({
    where: {
      id: rewards.id
    },
    data: {
        rewardPoints: rewards.rewardPoints,
        reedemablePoints: rewards.reedemablePoints
    }
  })

}

/**
 * Delete product
 */
 async function deleteProduct(rewardsId: number): Promise<void> {
  
  return await prisma.rewards.delete({
    where: {
        id: rewardsId
    }
  })

}



// **** Export default **** //

export default {
  getById,
  create,
  update,
  deleteProduct
} as const;

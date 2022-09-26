
import { IRewards } from '@models/rewards';
import rewardsRepo from '@repos/rewards-repo';


// **** Functions **** //

/**
 * Get product by Id
 */
function getById(id: number): Promise<IRewards> {
  return rewardsRepo.getById(id);
}

/**
 * Create Product
 */
 function createRewards(userId: number): Promise<IRewards> {
  return rewardsRepo.create(userId);
}

/**
 * Update Product
 */
 function updateRewards(rewards: IRewards): Promise<IRewards> {
  return rewardsRepo.update(rewards);
}


/**
 * Delete Product
 */
 function deleteRewards(rewardsId: number): Promise<void> {
  return rewardsRepo.deleteProduct(rewardsId);
}

// **** Export default **** //

export default {
    getById,
    createRewards,
    updateRewards,
    deleteRewards
} as const;

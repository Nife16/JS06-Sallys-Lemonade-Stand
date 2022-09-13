// **** Types **** //

// User schema
export interface IRewards {
    id?: number
    rewardPoints: number
    reedemablePoints: number
}

/**
 * Get a new object.
 */
 function _new(): IRewards {
    return {
        rewardPoints: 0,
        reedemablePoints: 0
    };
  }

// Export default
export default {
    createNewRewardsObj: _new
}
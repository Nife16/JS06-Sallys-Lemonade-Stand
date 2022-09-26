
import { IProduct } from '@models/product';
import { IRewards } from '@models/rewards';
import productRepo from '@repos/product-repo';
import rewardsRepo from '@repos/rewards-repo';
import rewardsService from './rewards-service';


// **** Functions **** //

/**
 * Get product by Id
 */
function getById(id: number): Promise<IProduct> {
  return productRepo.getById(id);
}

/**
 * Create Product
 */
 function createProduct(product: IProduct): Promise<IProduct> {
  return productRepo.create(product);
}

/**
 * Update Product
 */
 function updateProduct(product: IProduct): Promise<IProduct> {
  return productRepo.update(product);
}

async function purchaseProduct(product: IProduct, rewards: IRewards): Promise<Object> {

  let totalPrice = (Number(product.price)*3)  ///quantity

  const purchasePoints = (totalPrice/20)+rewards.rewardPoints

  if(purchasePoints >= 1) {

    const wholeNumber = Math.floor(purchasePoints)

    const leftOverRewards = purchasePoints - wholeNumber

    rewards.reedemablePoints += wholeNumber
    rewards.rewardPoints = leftOverRewards
  } else {
    rewards.rewardPoints = purchasePoints
  }

  rewards = await rewardsService.updateRewards(rewards)

  product.inventory -= 3 // quantity 

  product = await productRepo.update(product)

  product.price = doWeNeedTrailingZero(product.price)

  return product


}

const doWeNeedTrailingZero = (numAsString: any): string => {

  if(numAsString.toString().length <= 3) {

    if(numAsString.toString().length === 3) {

      numAsString += '0'

    } else {
      
      numAsString += '.00'

    }
  } 

  return numAsString

}

/**
 * Delete Product
 */
 function deleteProduct(productId: number): Promise<void> {
  return productRepo.deleteProduct(productId);
}

// **** Export default **** //

export default {
    getById,
    createProduct,
    updateProduct,
    purchaseProduct,
    deleteProduct
} as const;


import { IProduct } from '@models/product';
import productRepo from '@repos/product-repo';


// **** Functions **** //

/**
 * Get all users
 */
function getById(id: number): Promise<IProduct> {
  return productRepo.getById(id);
}

// **** Export default **** //

export default {
    getById
} as const;

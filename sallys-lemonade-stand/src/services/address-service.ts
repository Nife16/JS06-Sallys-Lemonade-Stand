import { IAddress } from '@models/address';
import addressRepo from '@repos/address-repo';


// **** Functions **** //

/**
 * Get all users
 */
function getById(id: number): Promise<IAddress> {
  return addressRepo.getById(id);
}

/**
 * Create
 */
 function createAddress(address: IAddress): Promise<void> {
  return addressRepo.createAddress(address);
}

// **** Export default **** //

export default {
    getById,
    createAddress
} as const;

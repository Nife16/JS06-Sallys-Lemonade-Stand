import { IAddress } from '@models/address';
import addressRepo from '@repos/address-repo';
import userService from './user-service';


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
 async function createAddress(address: IAddress, userId: number): Promise<IAddress | null> {


  const user = await userService.getById(userId)

  if(user?.address) {

    throw new Error("This user has an address")

  }
  const savedAddress = await addressRepo.createAddress(address, userId);

  userService.save(user)
  
  return savedAddress
}

/**
 * Update
 */
 async function updateAddress(address: IAddress): Promise<IAddress | null> {

  if(address.id === undefined) {

    throw new Error("id not found")

  }

  const savedAddress = await addressRepo.updateAddress(address);
  
  return savedAddress
}

// **** Export default **** //

export default {
  getById,
  createAddress,
  updateAddress
} as const;

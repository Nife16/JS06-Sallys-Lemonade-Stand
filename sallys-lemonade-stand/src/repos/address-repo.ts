import { IAddress } from "@models/address";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


// **** Functions **** //

/**
 * Get one address
 */
 async function getById(id: number): Promise<IAddress> {
  
  return await prisma.address.findUnique({
    where: {
        id: id
    }
  })

}

/**
 * create address
 */
async function createAddress(address: IAddress, userId: number): Promise<IAddress> {
  
  return await prisma.address.create({
    data: {
      streetNumber: address.streetNumber,
      streetName: address.streetName,
      cityName: address.cityName,
      stateName: address.stateName,
      zipCode: address.zipCode,
      userId: userId
    }
  })

}
/**
 * update address
 */
 async function updateAddress(address: IAddress): Promise<IAddress> {
  
  return await prisma.address.update({
    where: {
      id: address.id
    },
    data: {
      streetNumber: address.streetNumber,
      streetName: address.streetName,
      cityName: address.cityName,
      stateName: address.stateName,
      zipCode: address.zipCode
    }
  })

}



// **** Export default **** //

export default {
  getById,
  createAddress,
  updateAddress
} as const;

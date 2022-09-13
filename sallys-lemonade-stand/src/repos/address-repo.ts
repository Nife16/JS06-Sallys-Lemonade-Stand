import { IAddress } from "@models/address";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


// **** Functions **** //

/**
 * Get one user
 */
 async function getById(id: number): Promise<IAddress> {
  
  return await prisma.address.findUnique({
    where: {
        id: id
    }
  })

}

/**
 * Get one user
 */
async function createAddress(address: IAddress): Promise<void> {
  
  return await prisma.address.create({
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
  createAddress
} as const;

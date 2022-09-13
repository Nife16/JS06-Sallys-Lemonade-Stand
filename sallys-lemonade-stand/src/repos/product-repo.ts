import { IProduct } from "@models/product";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


// **** Functions **** //

/**
 * Get one user
 */
async function getById(id: number): Promise<IProduct> {
  
  return await prisma.product.findUnique({
    where: {
        id: id
    }
  })

}



// **** Export default **** //

export default {
  getById
} as const;

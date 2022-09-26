import { IProduct } from "@models/product";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


// **** Functions **** //

/**
 * Get one product
 */
async function getById(id: number): Promise<IProduct> {
  
  return await prisma.product.findUnique({
    where: {
        id: id
    }
  })

}

/**
 * Create product
 */
 async function create(product: IProduct): Promise<IProduct> {
  
  return await prisma.product.create({
    data: {
      name: product.name,
      description: product.description,
      inventory: product.inventory,
      price: product.price
    }
  })

}

/**
 * Update product
 */
 async function update(product: IProduct): Promise<IProduct> {
  
  return await prisma.product.update({
    where: {
      id: product.id
    },
    data: {
      name: product.name,
      description: product.description,
      inventory: product.inventory,
      price: product.price
    }
  })

}

/**
 * Delete product
 */
 async function deleteProduct(productId: number): Promise<void> {
  
  return await prisma.product.delete({
    where: {
        id: productId
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

import { IUser } from '@models/user-model';
import { getRandomInt } from '@shared/functions';
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


// **** Functions **** //

/**
 * Get one user
 */
async function getAll(): Promise<IUser[]> {
  
  return await prisma.user.findMany()

}


/**
 * Create user
 */
async function create(user: IUser): Promise<void> {
  
  return await prisma.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.password
    },
  })

}


// **** Export default **** //

export default {
  getAll,
  create
} as const;

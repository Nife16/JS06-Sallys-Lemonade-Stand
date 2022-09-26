import { IUser } from '@models/user-model';
import { getRandomInt } from '@shared/functions';
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()


// **** Functions **** //

/**
 * Get one user
 */
async function getAll(): Promise<IUser[]> {
  
  return await prisma.user.findMany({include: {address: true, rewards: true}})

}

async function getById(userId: number): Promise<IUser> {

  return await prisma.user.findUnique({
    include: {address: true, rewards: true},
    where: {
      id: userId
    }
  })

}

async function getByEmailAndPassword(user: IUser): Promise<IUser> {

  return await prisma.user.findUnique({
    include: {address: true, rewards: true},
    where: {
      email: user.email
    }
  })

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

/**
 * Save user
 */
async function save(user: IUser): Promise<void> {
  
  return await prisma.user.update({
    where: {
      id: user.id
    },
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
      addressId: user.address?.id,
      rewardsId: user.rewards?.id
    },
  })

}

/**
 * Delete user
 */
async function deleteUser(id: number): Promise<void> {
  
  return await prisma.user.delete({
    where: {
      id: id
    }
  })

}


// **** Export default **** //

export default {
  getAll,
  getById,
  create,
  getByEmailAndPassword,
  save,
  deleteUser
} as const;

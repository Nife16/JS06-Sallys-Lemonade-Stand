import userRepo from '@repos/user-repo';
import { IUser } from '@models/user-model';
import { UserNotFoundError } from '@shared/errors';


// **** Functions **** //

/**
 * Get all users
 */
function getAll(): Promise<IUser[]> {
  return userRepo.getAll();
}

/**
 * Get all users
 */
 function getById(userId: number): Promise<IUser> {
  return userRepo.getById(userId);
}

/**
 * create user
 */
 function signUp(user: IUser): Promise<void> {
  return userRepo.create(user);
}

/**
 * get user by email and password, sign in
 */
 function signIn(user: IUser): Promise<IUser> {
  return userRepo.getByEmailAndPassword(user);
}

/**
 * Save user
 */
 function save(user: IUser): Promise<void> {
  return userRepo.save(user);
}

/**
 * delete user
 */
 function deleteUser(id: number): Promise<void> {
  return userRepo.deleteUser(id);
}

// **** Export default **** //

export default {
    getAll,
    getById,
    signUp,
    signIn,
    save,
    deleteUser
} as const;

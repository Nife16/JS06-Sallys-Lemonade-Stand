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
 * create user
 */
 function signUp(user: IUser): Promise<void> {
  return userRepo.create(user);
}

// **** Export default **** //

export default {
    getAll,
    signUp
} as const;

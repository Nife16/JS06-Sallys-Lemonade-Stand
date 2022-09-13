// **** Types **** //

import { IAddress } from "./address";
import { IRewards } from "./rewards";

// User schema
export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  address: IAddress;
  rewards: IRewards
}



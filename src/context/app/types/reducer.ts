import {IUserData} from 'src/types/app';

export interface State extends IUserData {}
export interface Action extends State {
  type: string;
}

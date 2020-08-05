import {INavigation} from 'src/types/app';

export interface State extends INavigation {}
export interface Action extends State {
  type: string;
}

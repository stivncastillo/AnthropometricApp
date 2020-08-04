import {IWeight} from 'src/types/app';

export interface State extends IWeight {}
export interface Action extends State {
  type: string;
}

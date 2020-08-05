import {IHeight} from 'src/types/app';

export interface State extends IHeight {}
export interface Action extends State {
  type: string;
}

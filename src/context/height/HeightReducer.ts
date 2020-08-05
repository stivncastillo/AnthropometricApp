import {SET_TYPE_HEIGHT, TOGGLE_HEIGHT_TYPE} from '../types';
import {IHeight} from 'src/types/app';

interface IHeightAction extends IHeight {
  type: string;
}

function WeightReducer(state: IHeight, action: IHeightAction) {
  switch (action.type) {
    case SET_TYPE_HEIGHT:
      return {
        ...state,
        typeHeight: action.typeHeight,
      };
    case TOGGLE_HEIGHT_TYPE:
      return {
        ...state,
        heightList: action.heightList,
      };
    default:
      return state;
  }
}

export default WeightReducer;

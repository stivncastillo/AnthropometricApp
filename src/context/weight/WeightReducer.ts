import {SET_TYPE_WEIGHT, TOGGLE_WEIGHT_TYPE} from '../types';
import {IWeight} from 'src/types/app';

interface IWeightAction extends IWeight {
  type: string;
}

function WeightReducer(state: IWeight, action: IWeightAction) {
  switch (action.type) {
    case SET_TYPE_WEIGHT:
      return {
        ...state,
        typeWeight: action.typeWeight,
      };
    case TOGGLE_WEIGHT_TYPE:
      return {
        ...state,
        weightList: action.weightList,
      };
    default:
      return state;
  }
}

export default WeightReducer;

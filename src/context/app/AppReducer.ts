import {SET_GENDER, SET_WEIGHT, SET_TYPE_WEIGHT} from '../types';
import {IUserData} from 'src/types/app';

interface IUserDataAction extends IUserData {
  type: string;
}

function AppReducer(state: IUserData, action: IUserDataAction) {
  switch (action.type) {
    case SET_GENDER:
      return {
        ...state,
        gender: action.gender,
      };
    case SET_WEIGHT:
      return {
        ...state,
        weight: action.weight,
      };
    case SET_TYPE_WEIGHT:
      return {
        ...state,
        typeWeight: action.typeWeight,
      };
    default:
      return state;
  }
}

export default AppReducer;

import {
  SET_NEXT_STEP,
  SET_LAST_STEP,
  SET_TOTAL_STEP,
  SET_CURRENT_STEP,
} from '../types';
import {INavigation} from 'src/types/app';

interface INavigationAction extends INavigation {
  type: string;
}

function NavigationReducer(state: INavigation, action: INavigationAction) {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.currentStep,
      };
    case SET_TOTAL_STEP:
      return {
        ...state,
        totalSteps: action.totalSteps,
      };
    case SET_LAST_STEP:
      return {
        ...state,
        lastStep: action.lastStep,
      };
    case SET_NEXT_STEP:
      return {
        ...state,
        nextStep: action.nextStep,
      };
    default:
      return state;
  }
}

export default NavigationReducer;

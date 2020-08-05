import React, {useReducer, ReactNode} from 'react';
import NavigationContext from './navigationContext';
import NavigationReducer from './NavigationReducer';

import {
  SET_NEXT_STEP,
  SET_LAST_STEP,
  SET_TOTAL_STEP,
  SET_CURRENT_STEP,
} from '../types';
import {State} from './types/reducer';

const NavigationState = (props: {children: ReactNode}) => {
  const initialState: State = {
    currentStep: 1,
    lastStep: 0,
    nextStep: 0,
    totalSteps: 5,
  };

  const [state, dispatch] = useReducer(NavigationReducer, initialState);

  const setCurrentStep = (currentStep: number): void => {
    dispatch({
      type: SET_CURRENT_STEP,
      currentStep,
    });
  };

  const setLastStep = (lastStep: number): void => {
    dispatch({
      type: SET_LAST_STEP,
      lastStep,
    });
  };

  const setTotalStep = (totalSteps: number): void => {
    dispatch({
      type: SET_TOTAL_STEP,
      totalSteps,
    });
  };

  const setNextStep = (nextStep: number): void => {
    dispatch({
      type: SET_NEXT_STEP,
      nextStep,
    });
  };

  return (
    <NavigationContext.Provider
      value={{
        currentStep: state.currentStep,
        lastStep: state.lastStep,
        totalSteps: state.totalSteps,
        nextStep: state.nextStep,
        setCurrentStep,
        setLastStep,
        setTotalStep,
        setNextStep,
      }}>
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationState;

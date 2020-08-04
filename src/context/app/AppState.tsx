import React, {useReducer, ReactNode} from 'react';
import AppContext from './appContext';
import AppReducer from './AppReducer';

import {SET_GENDER, SET_WEIGHT} from '../types';
import {State} from './types/reducer';

const AppState = (props: {children: ReactNode}) => {
  const initialState: State = {
    gender: '',
    weight: 0,
    height: 0,
    typeHeight: 'centimeters',
    hairColor: '',
    eyeColor: '',
    skinColor: '',
    topSize: '',
    bottomSize: 0,
    shoesSize: 0,
    typeBody: '',
    style: '',
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setGender = (gender: string): void => {
    dispatch({
      type: SET_GENDER,
      gender,
    });
  };

  const setWeight = (weight: number): void => {
    dispatch({
      type: SET_WEIGHT,
      weight,
    });
  };

  return (
    <AppContext.Provider
      value={{
        gender: state.gender,
        weight: state.weight,
        setGender,
        setWeight,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;

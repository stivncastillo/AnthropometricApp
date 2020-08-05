import React, {useReducer, ReactNode} from 'react';
import WeightContext from './weightContext';
import WeightReducer from './WeightReducer';

import {SET_TYPE_WEIGHT, TOGGLE_WEIGHT_TYPE} from '../types';
import {State} from './types/reducer';

const WeightState = (props: {children: ReactNode}) => {
  const initialState: State = {
    typeWeight: 'kilos',
    weightList: Array.from({length: 100}, (x, i) => i + 30).map((item) => ({
      value: item,
      label: item,
    })),
  };

  const [state, dispatch] = useReducer(
    WeightReducer,
    initialState,
    () => initialState,
  );

  const setTypeWeight = (typeWeight: string): void => {
    if (state.typeWeight !== typeWeight) {
      if (typeWeight === 'pounds') {
        const newList = state.weightList.map((item) => {
          const newValue = item.value * 2;
          return {
            label: newValue,
            value: newValue,
          };
        });

        setToggleWeight(newList);
      } else {
        setToggleWeight(initialState.weightList);
      }

      dispatch({
        type: SET_TYPE_WEIGHT,
        typeWeight,
      });
    }
  };

  const setToggleWeight = (weightList: Array<any>): void => {
    dispatch({
      type: TOGGLE_WEIGHT_TYPE,
      weightList,
    });
  };

  return (
    <WeightContext.Provider
      value={{
        typeWeight: state.typeWeight,
        weightList: state.weightList,
        setTypeWeight,
        setToggleWeight,
      }}>
      {props.children}
    </WeightContext.Provider>
  );
};

export default WeightState;

import React, {useReducer, ReactNode} from 'react';
import HeightContext from './heightContext';
import HeightReducer from './HeightReducer';

import {SET_TYPE_HEIGHT, TOGGLE_HEIGHT_TYPE} from '../types';
import {State} from './types/reducer';

const HeightState = (props: {children: ReactNode}) => {
  const initialState: State = {
    typeHeight: 'centimeters',
    heightList: Array.from({length: 100}, (x, i) => i + 100).map((item) => ({
      value: item,
      label: item,
    })),
  };

  const [state, dispatch] = useReducer(
    HeightReducer,
    initialState,
    () => initialState,
  );

  const setTypeHeight = (typeHeight: string): void => {
    if (state.typeHeight !== typeHeight) {
      if (typeHeight === 'feets') {
        const newList = state.heightList.map((item) => {
          const newValue = item.value - 100;
          return {
            label: newValue,
            value: newValue,
          };
        });

        setToggleHeight(newList);
      } else {
        setToggleHeight(initialState.heightList);
      }

      dispatch({
        type: SET_TYPE_HEIGHT,
        typeHeight,
      });
    }
  };

  const setToggleHeight = (heightList: Array<any>): void => {
    dispatch({
      type: TOGGLE_HEIGHT_TYPE,
      heightList,
    });
  };

  return (
    <HeightContext.Provider
      value={{
        typeHeight: state.typeHeight,
        heightList: state.heightList,
        setTypeHeight,
        setToggleHeight,
      }}>
      {props.children}
    </HeightContext.Provider>
  );
};

export default HeightState;

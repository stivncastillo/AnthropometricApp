import React from 'react';
import NumberPickerContext from '../context';

const useNumberPickerContext = () => {
  const context = React.useContext(NumberPickerContext);
  if (!context) {
    throw new Error(
      'NumberPicker compound components cannot be rendered outside the NumberPicker component',
    );
  }
  return context;
};

export default useNumberPickerContext;

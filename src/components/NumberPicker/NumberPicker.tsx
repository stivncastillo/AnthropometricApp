import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import NumberPickerContext from './context';
import styles from './styles';
import Header from './components/Header';
// const context = React.useContext(NumberPickerContext);

type NumberPickerProps = {children: React.ReactNode};
interface NumberPickerStatic {
  Header: FunctionComponent;
}

const NumberPicker: React.SFC<NumberPickerProps> & NumberPickerStatic = ({
  children,
}) => {
  return (
    <NumberPickerContext.Provider value={{}}>
      <View style={styles.container}>{children}</View>
    </NumberPickerContext.Provider>
  );
};

NumberPicker.Header = Header;

export default NumberPicker;

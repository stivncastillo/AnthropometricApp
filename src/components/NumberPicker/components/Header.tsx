import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import useNumberPickerContext from '../hooks/useNumberPickerContext';

import styles from '../styles';

const Header: FunctionComponent = (props) => {
  // const {id, value, onChange} = useNumberPickerContext();
  return <View style={styles.controlContainer}>{props.children}</View>;
};

export default Header;

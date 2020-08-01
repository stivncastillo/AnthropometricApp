import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import styles from './styles';

interface OwnProps {
  children: React.ReactNode;
}

const Container: FunctionComponent<OwnProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

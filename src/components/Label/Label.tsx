import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

interface LabelProps {
  children: React.ReactNode;
}

const Label: FunctionComponent<LabelProps> = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Label;

import React, {FunctionComponent} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

interface HeaderButtonProps {
  title: string;
  onPress: () => void;
}

const HeaderButton: FunctionComponent<HeaderButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HeaderButton;

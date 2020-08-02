import React, {FunctionComponent} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

interface ControlButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onPress: () => void;
}

const ControlButton: FunctionComponent<ControlButtonProps> = ({
  children,
  active,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, active && {...styles.buttonActive}]}>
        <Text
          style={[styles.buttonText, active && {...styles.buttonActiveText}]}>
          {children}
        </Text>

        {active ? (
          <View style={styles.circle} />
        ) : (
          <View style={styles.circleInvisible} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ControlButton;

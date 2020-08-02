import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';

interface WeightPickerItemProps {
  value: string;
}

const WeightPickerItem: FunctionComponent<WeightPickerItemProps> = ({
  value,
}) => {
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default WeightPickerItem;

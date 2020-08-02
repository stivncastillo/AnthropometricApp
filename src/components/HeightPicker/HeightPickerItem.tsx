import React, {FunctionComponent} from 'react';
import {View, Text} from 'react-native';

interface HeightPickerItemProps {
  value: string;
}

const HeightPickerItem: FunctionComponent<HeightPickerItemProps> = ({
  value,
}) => {
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default HeightPickerItem;

import React, {FunctionComponent, useState, useCallback} from 'react';
import {View, Text, TouchableNativeFeedback, Image} from 'react-native';
import styles from './styles';

interface GenderPickerProps {
  onPress: (value: string) => void;
}

const GenderPicker: FunctionComponent<GenderPickerProps> = ({onPress}) => {
  const [genderSelected, setGender] = useState<string | null>(null);

  const handleChange = useCallback(
    (gender: string): void => {
      setGender(gender);
      onPress(gender);
    },
    [onPress],
  );

  return (
    <>
      <View style={styles.container}>
        <TouchableNativeFeedback onPress={() => handleChange('woman')}>
          <View
            style={[
              styles.item,
              genderSelected === 'woman' && {...styles.itemActive},
            ]}>
            <Image
              style={styles.icon}
              source={require('../../assets/media/woman.png')}
            />
            <Text style={styles.text}>Mujer</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => handleChange('man')}>
          <View
            style={[
              styles.item,
              genderSelected === 'man' && {...styles.itemActive},
            ]}>
            <Image
              style={styles.icon}
              source={require('../../assets/media/man.png')}
            />
            <Text style={styles.text}>Hombre</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
};

export default GenderPicker;

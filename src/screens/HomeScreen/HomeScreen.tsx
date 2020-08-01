import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {IScreenProps} from '../../types/props';
import {Container, ProgressBar, GenderPicker, Label} from '../../components';
import styles from './styles';

export interface IHomeProps extends IScreenProps {}

const Home: React.FC<IHomeProps> = ({navigation}) => {
  const handleGenderChange = useCallback((gender) => {
    // Send to context
    console.log(gender);
  }, []);

  return (
    <Container>
      <ProgressBar currentStep={1} totalSteps={4} />

      <Label>Género</Label>

      <GenderPicker onPress={handleGenderChange} />

      <Label>Peso</Label>

      <View>
        <Text>Weight Piker</Text>
      </View>
      <View>
        <Text>Height Piker</Text>
      </View>
    </Container>
  );
};

export default Home;

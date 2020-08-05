import React, {useCallback, useContext} from 'react';
import {IScreenProps} from '../../types/props';
import {
  Container,
  ProgressBar,
  GenderPicker,
  Label,
  NumberPicker,
  AppCarousel,
  ControlButton,
} from '../../components';

import AppContext from '../../context/app/appContext';
import WeightContext from '../../context/weight/weightContext';
import HeightContext from '../../context/height/heightContext';

export interface IHomeProps extends IScreenProps {}

const Home: React.FC<IHomeProps> = ({navigation}) => {
  const appContext = useContext(AppContext);
  const weightContext = useContext(WeightContext);
  const heightContext = useContext(HeightContext);

  const {gender, setGender, setWeight, weight, height, setHeight} = appContext;
  const {typeWeight, setTypeWeight, weightList} = weightContext;
  const {typeHeight, setTypeHeight, heightList} = heightContext;

  const handleGenderChange = useCallback(
    (value: string) => {
      setGender(value);
    },
    [setGender],
  );

  const handleWeightChange = useCallback(
    (value: number) => {
      setWeight(value);
    },
    [setWeight],
  );

  const handleTypeWeightChange = useCallback(
    (value: number) => {
      setTypeWeight(value);
    },
    [typeWeight, setTypeWeight],
  );

  const handleHeightChange = useCallback(
    (value: number) => {
      setHeight(value);
    },
    [setHeight],
  );

  const handleTypeHeightChange = useCallback(
    (value: number) => {
      setTypeHeight(value);
    },
    [typeHeight, setTypeHeight],
  );

  return (
    <Container>
      <ProgressBar currentStep={1} totalSteps={5} />

      <Label>Género {gender}</Label>

      <GenderPicker onPress={handleGenderChange} />

      <Label>Peso</Label>

      <NumberPicker>
        <NumberPicker.Header>
          <ControlButton
            onPress={() => handleTypeWeightChange('kilos')}
            active={typeWeight === 'kilos'}>
            Kilos
          </ControlButton>
          <ControlButton
            onPress={() => handleTypeWeightChange('pounds')}
            active={typeWeight === 'pounds'}>
            Libras
          </ControlButton>
        </NumberPicker.Header>

        <AppCarousel data={weightList} onSnapToItem={handleWeightChange} />
      </NumberPicker>

      <Label>Estatura</Label>

      <NumberPicker>
        <NumberPicker.Header>
          <ControlButton
            onPress={() => handleTypeHeightChange('centimeters')}
            active={typeHeight === 'centimeters'}>
            Centímetros
          </ControlButton>
          <ControlButton
            onPress={() => handleTypeHeightChange('feets')}
            active={typeHeight === 'feets'}>
            Pies
          </ControlButton>
        </NumberPicker.Header>

        <AppCarousel data={heightList} onSnapToItem={handleHeightChange} />
      </NumberPicker>
    </Container>
  );
};

export default React.memo(Home);

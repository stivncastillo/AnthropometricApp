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

// const weightList = Array.from({length: 100}, (x, i) => i + 30).map((item) => ({
//   value: item,
//   label: item,
// }));

// const heightList = Array.from({length: 100}, (x, i) => i + 100).map((item) => ({
//   value: item,
//   label: item,
// }));

export interface IHomeProps extends IScreenProps {}

const Home: React.FC<IHomeProps> = ({navigation}) => {
  const appContext = useContext(AppContext);
  const weightContext = useContext(WeightContext);
  const {gender, setGender} = appContext;
  const {setWeight, weight} = appContext;
  const {
    typeWeight,
    setTypeWeight,
    weightList,
    setToggleWeight,
  } = weightContext;

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

        <AppCarousel data={weightList} />
      </NumberPicker>

      {/* <Label>Peso {`${weight} Kilos`}</Label>

      <WeightPicker data={weightList} onSnapToItem={handleWeightChange} />

      <Label>Estatura</Label>

      <HeightPicker data={heightList} /> */}
    </Container>
  );
};

export default React.memo(Home);

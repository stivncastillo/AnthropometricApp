import React, {
  useState,
  ReactElement,
  FunctionComponent,
  useEffect,
} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ControlButton} from '..';
import styles from './styles';

interface HeightPickerProps {
  data: Array<any>;
}

type ItemProps = {item: any; index: number};

const HeightPicker: FunctionComponent<HeightPickerProps> = ({data}) => {
  const [type, setType] = useState('centimeters');
  const [values, setValues] = useState<Array<any>>([]);

  useEffect(() => {
    setValues(data);
  }, [data]);

  useEffect(() => {
    if (type === 'feets') {
      const newData = data.map((item) => {
        const newValue = item.value - 100;
        return {
          label: newValue,
          value: newValue,
        };
      });
      setValues(newData);
    }
    if (type === 'centimeters') {
      setValues(data);
    }
  }, [data, type]);

  const renderItem = ({item}: ItemProps): ReactElement => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselItemText}>{item.label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        <ControlButton
          onPress={() => setType('centimeters')}
          active={type === 'centimeters'}>
          Centímetros
        </ControlButton>
        <ControlButton
          onPress={() => setType('feets')}
          active={type === 'feets'}>
          Pies
        </ControlButton>
      </View>

      <Carousel
        style={styles.carousel}
        data={values}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width - 32}
        itemWidth={60}
        inactiveSlideScale={0.6}
        inactiveSlideShift={10}
        firstItem={data.length / 2}
        inactiveSlideOpacity={0.4}
        apparitionDelay={10}
        slideStyle={styles.carouselItemContainer}
        onSnapToItem={(item) => console.log(data[item])}
      />

      <View style={styles.triangle} />
    </View>
  );
};

export default HeightPicker;

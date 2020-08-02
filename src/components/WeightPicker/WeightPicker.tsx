import React, {
  useState,
  ReactElement,
  FunctionComponent,
  useCallback,
  useEffect,
} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ControlButton} from '..';
import styles from './styles';

interface WeightPickerProps {
  data: Array<any>;
}

type ItemProps = {item: any; index: number};

const WeightPicker: FunctionComponent<WeightPickerProps> = ({data}) => {
  const [type, setType] = useState('kilo');
  const [values, setValues] = useState<Array<any>>([]);

  useEffect(() => {
    setValues(data);
  }, [data]);

  useEffect(() => {
    if (type === 'pound') {
      const newData = data.map((item) => {
        const newValue = item.value * 2;
        return {
          label: newValue,
          value: newValue,
        };
      });
      setValues(newData);
    }
    if (type === 'kilo') {
      setValues(data);
    }
  }, [data, type]);

  const renderItem = ({item}: ItemProps): ReactElement => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselItemText}>{item.label}</Text>
    </View>
  );

  // const handleToggleType = useCallback(() => {
  //   if (type === 'pound') {
  //     // 2.20462
  //     const newData = data.map((value) => {
  //       const newValue = value * 2.2;
  //       return {
  //         label: newValue,
  //         value: newValue,
  //       };
  //     });
  //     setValues(newData);
  //   }
  // }, [data, type]);

  return (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        <ControlButton onPress={() => setType('kilo')} active={type === 'kilo'}>
          Kilos
        </ControlButton>
        <ControlButton
          onPress={() => setType('pound')}
          active={type === 'pound'}>
          Libras
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

export default WeightPicker;

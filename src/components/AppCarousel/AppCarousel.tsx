import React, {ReactElement, useRef, FunctionComponent, useEffect} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

type ItemProps = {item: any; index: number};
interface AppCarouselProps {
  data?: Array<any> | [];
  onSnapToItem: (value: number) => void;
}

const AppCarousel: FunctionComponent<AppCarouselProps> = ({
  data,
  onSnapToItem,
}) => {
  const element = useRef(null);

  const renderItem = ({item}: ItemProps): ReactElement => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselItemText}>{item.label}</Text>
    </View>
  );

  return (
    <>
      <Carousel
        ref={element}
        style={styles.carousel}
        data={data ? data : []}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width - 32}
        itemWidth={60}
        inactiveSlideScale={0.6}
        inactiveSlideShift={10}
        firstItem={data ? data.length / 2 : 0}
        inactiveSlideOpacity={0.4}
        apparitionDelay={10}
        slideStyle={styles.carouselItemContainer}
        onSnapToItem={(item) => onSnapToItem(data ? data[item].value : 0)}
      />
    </>
  );
};

export default AppCarousel;

import React, {ReactElement} from 'react';
import {View, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './styles';

type ItemProps = {item: any; index: number};

const AppCarousel = ({data}) => {
  const renderItem = ({item}: ItemProps): ReactElement => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselItemText}>{item.label}</Text>
    </View>
  );

  return (
    <>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={Dimensions.get('window').width - 32}
        itemWidth={60}
        inactiveSlideScale={0.6}
        inactiveSlideShift={10}
        firstItem={data.length / 2}
        inactiveSlideOpacity={0.4}
        apparitionDelay={10}
        slideStyle={styles.carouselItemContainer}
        onSnapToItem={(item) => console.log(item)}
      />
    </>
  );
};

export default AppCarousel;

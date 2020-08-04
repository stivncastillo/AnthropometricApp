import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  carousel: {
    height: 50,
    paddingVertical: 16,
    flex: 1,
  },
  carouselItem: {
    width: 65,
    justifyContent: 'center',
  },
  carouselItemText: {
    color: '#535E71',
    fontSize: 32,
  },
  carouselItemContainer: {
    padding: 16,
  },
  triangle: {
    position: 'absolute',
    bottom: 10,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FEA0A8',
  },
});
//CDD4E0

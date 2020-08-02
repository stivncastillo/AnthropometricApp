import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#F4F7FD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingVertical: 16,
    shadowColor: '#F0F6FF',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 16,
  },
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
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
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

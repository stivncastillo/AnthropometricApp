import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonActive: {
    paddingVertical: 8,
  },
  buttonText: {
    color: '#CDD4E0',
    fontSize: 18,
    marginBottom: 4,
  },
  buttonActiveText: {
    color: '#000000',
  },
  circle: {
    width: 4,
    height: 4,
    borderRadius: 4 / 2,
    backgroundColor: '#FEA0A8',
  },
  circleInvisible: {
    width: 6,
    height: 6,
  },
});

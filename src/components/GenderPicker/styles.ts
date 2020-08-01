import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    marginVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  item: {
    borderWidth: 2,
    borderColor: '#F4F7FD',
    borderRadius: 10,
    width: '48%',
    // height: 150,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemActive: {
    borderColor: '#FEA0A8',
  },
  icon: {
    width: 54,
    height: 74,
    resizeMode: 'stretch',
    marginBottom: 16,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

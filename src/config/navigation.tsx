import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ColorScreen from '../screens/ColorScreen/ColorScreen';
import SizeScreen from '../screens/SizeScreen/SizeScreen';
import BodyTypeScreen from '../screens/BodyTypeScreen/BodyTypeScreen';
import ResumeScreen from '../screens/ResumeScreen/ResumeScreen';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Color" component={ColorScreen} />
      <MainStack.Screen name="Size" component={SizeScreen} />
      <MainStack.Screen name="BodyType" component={BodyTypeScreen} />
      <MainStack.Screen name="Resume" component={ResumeScreen} />
    </MainStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
};

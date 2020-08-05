import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ColorScreen from '../screens/ColorScreen/ColorScreen';
import SizeScreen from '../screens/SizeScreen/SizeScreen';
import BodyTypeScreen from '../screens/BodyTypeScreen/BodyTypeScreen';
import ResumeScreen from '../screens/ResumeScreen/ResumeScreen';
import {HeaderButton} from '../components';

const MainStack = createStackNavigator();
const buttonHeader = (navigation, screen: string) => {
  return (
    <HeaderButton onPress={() => navigation.push(screen)} title="Siguiente" />
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={({
          navigation,
        }): {title: string; headerRight: () => React.ReactNode} => ({
          title: 'Estudio',
          headerRight: () => buttonHeader(navigation, 'Color'),
        })}
      />
      <MainStack.Screen
        name="Color"
        component={ColorScreen}
        options={({
          navigation,
        }): {title: string; headerRight: () => React.ReactNode} => ({
          title: 'Estudio',
          headerRight: () => buttonHeader(navigation, 'Size'),
        })}
      />
      <MainStack.Screen
        name="Size"
        component={SizeScreen}
        options={({
          navigation,
        }): {title: string; headerRight: () => React.ReactNode} => ({
          title: 'Estudio',
          headerRight: () => buttonHeader(navigation, 'BodyType'),
        })}
      />
      <MainStack.Screen
        name="BodyType"
        component={BodyTypeScreen}
        options={({
          navigation,
        }): {title: string; headerRight: () => React.ReactNode} => ({
          title: 'Estudio',
          headerRight: () => buttonHeader(navigation, 'Resume'),
        })}
      />
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

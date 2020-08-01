import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Navigation from './config/navigation';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </>
  );
};

export default App;

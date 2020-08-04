import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Navigation from './config/navigation';

import AppState from './context/app/AppState';
import WeightState from './context/weight/WeightState';

const App: React.FC = () => {
  return (
    <AppState>
      <WeightState>
        <StatusBar barStyle="dark-content" />
        <Navigation />
      </WeightState>
    </AppState>
  );
};

export default App;

import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import Navigation from './config/navigation';

import AppState from './context/app/AppState';
import WeightState from './context/weight/WeightState';
import HeightState from './context/height/HeightState';

const App: React.FC = () => {
  return (
    <AppState>
      <WeightState>
        <HeightState>
          <StatusBar barStyle="dark-content" />
          <Navigation />
        </HeightState>
      </WeightState>
    </AppState>
  );
};

export default App;

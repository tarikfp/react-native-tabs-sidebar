import React from 'react';
import AppTabBar from './tabbar/TabBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppTabBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

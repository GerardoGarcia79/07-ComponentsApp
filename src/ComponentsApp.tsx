import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import '../gesture-handler';
import {StackNavigator} from './presentation/navigator/StackNavigator';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

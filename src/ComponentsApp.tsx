import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import '../gesture-handler';
import {StackNavigator} from './presentation/navigator/StackNavigator';
import {PropsWithChildren} from 'react';
import {ThemeProvider} from './presentation/context/ThemeContext';

const AppState = ({children}: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

export const ComponentsApp = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

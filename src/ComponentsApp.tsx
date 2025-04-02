import React from 'react';
import '../gesture-handler';
import {ThemeProvider} from './presentation/context/ThemeContext';
import {StackNavigator} from './presentation/navigator/StackNavigator';

export const ComponentsApp = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
};

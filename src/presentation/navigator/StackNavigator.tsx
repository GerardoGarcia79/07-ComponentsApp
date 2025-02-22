import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {Animation101Screen} from '../screens/animations/Animation101Screen';
import {Animation102Screen} from '../screens/animations/Animation102Screen';
import {SwitchScreen} from '../screens/switches/SwitchScreen';
import {AlertScreen} from '../screens/alerts/AlertScreen';
import {TextInputScreen} from '../screens/inputs/TextInputScreen';
import {PullToRefreshScreen} from '../components/ui/PullToRefreshScreen';
import {CustomSectionListScreen} from '../components/ui/CustomSectionListScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
    </Stack.Navigator>
  );
};

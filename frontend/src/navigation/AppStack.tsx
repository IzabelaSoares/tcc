import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as AppScreens from '../screens/authenticated';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries(AppScreens).map(([name, Component]) => (
        <Stack.Screen
          key={name}
          name={name}
          component={Component as React.ComponentType<any>}
        />
      ))}
    </Stack.Navigator>
  );
}

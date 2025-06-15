import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as AuthScreens from '../screens/auth';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries(AuthScreens).map(([name, Component]) => (
        <Stack.Screen
          key={name}
          name={name}
          component={Component as React.ComponentType<any>}
        />
      ))}
    </Stack.Navigator>
  );
}

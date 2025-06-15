import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, SignUp } from '../screens';

type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

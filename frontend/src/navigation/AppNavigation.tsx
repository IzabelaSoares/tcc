import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import AuthStack from "./AuthStack";
import AppTabs from "./AppTabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AppNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {isLoggedIn ? <AppTabs /> : <AuthStack />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

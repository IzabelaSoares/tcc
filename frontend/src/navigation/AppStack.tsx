import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION_MENU } from './Menu';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries(NAVIGATION_MENU).map(([name, Component]) => (
        <Stack.Screen
          key={name}
          name={name}
          component={Component as React.ComponentType<any>}
        />
      ))}
    </Stack.Navigator>
  );
}

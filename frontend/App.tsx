import "./global.css";
import { AuthProvider } from "./src/context/AuthContext";
import { useLoadFonts } from "./src/hooks/useLoadFonts";
import AppNavigator from "./src/navigation/AppNavigation";

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return null;
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

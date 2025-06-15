import "./global.css";
import { useLoadFonts } from "./src/hooks/useLoadFonts";
import Home from "./src/pages/Home";
import SignUp from "./src/pages/SignUp";

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return null;
  return <SignUp/>;
}

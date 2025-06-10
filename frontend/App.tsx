import "./global.css";
import { useLoadFonts } from "./src/hooks/useLoadFonts";
import Home from "./src/pages/Home";

export default function App() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return null;
  return <Home />;
}

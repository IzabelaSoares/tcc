import { Image, ImageSourcePropType } from "react-native";
interface props {
  className?: string
  source?: ImageSourcePropType 
  resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center"
}

export default function Illustration({ className, source, resizeMode }: props) {
  return (
    <Image
      source={source}
      className={className}
      resizeMode={resizeMode}
    />
  );
}

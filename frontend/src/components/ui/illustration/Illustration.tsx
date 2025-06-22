import { Image, ImageSourcePropType } from "react-native";
interface props {
  className?: string
  source?: ImageSourcePropType 
}

export default function Illustration({ className, source }: props) {
  return (
    <Image
      source={source}
      className={className}
      resizeMode="contain"
    />
  );
}

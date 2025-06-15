import { View } from "react-native";
interface props {
  className?: string
}

export function Separator({ className }: props) {
  return <View className={`h-px ${className}`} />;
}

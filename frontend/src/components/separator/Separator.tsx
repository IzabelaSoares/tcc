import { View } from "react-native";

export function Separator({ className }: { className?: string }) {
  return <View className={`h-px bg-black-100 ${className}`} />;
}

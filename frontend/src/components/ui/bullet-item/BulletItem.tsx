import { View, Text } from "react-native";

interface props {
  text: string;
  className?: string
}

export default function BulletItem({ text, className }: props) {
  return (
    <View className="flex-row items-start mb-2 mt-8 mx-4">
      <Text className={`mr-2 ${className}`}>•</Text>
      <Text className={className}>{text}</Text>
    </View>
  );
}

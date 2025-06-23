import { View, Text } from "react-native";

interface props {
  initials: string;
  size: number;
}

export default function AvatarWithoutPicture({ size, initials }: props) {
  return (
    <View
      className="bg-gray-300 rounded-full justify-center items-center"
      style={{ width: size, height: size }}
    >
      <Text className="text-white text-2xl font-bold">{initials}</Text>
    </View>
  );
}

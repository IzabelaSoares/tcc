import { View, Text } from "react-native";

interface props {
  title: string;
  address: string;
}

export default function AddressDetails({ title, address }: props) {
  return (
    <View className="w-2/3">
      <Text className="text-xl font-medium">{title}</Text>
      <Text className="text-base mt-2 leading-7">{address}</Text>
    </View>
  );
}

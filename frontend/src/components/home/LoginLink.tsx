import { View, Text } from "react-native";

export default function LoginLink() {
  return (
    <View className="flex-row justify-center">
      <Text className="text-white text-[14px]">Já possuí uma conta?</Text>
      <Text className="text-white text-[14px] font-bold ml-1">Login</Text>
    </View>
  );
}

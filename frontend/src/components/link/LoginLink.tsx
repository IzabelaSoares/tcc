import { View, Text } from "react-native";

interface props {
  variant?: "default" | "black";
}

export default function LoginLink({ variant }: props) {
  const color = variant === "black" ? "text-black-" : "text-white";
  return (
    <View className="flex-row justify-center">
      <Text className={`text-[14px] ${color}`}>Já possuí uma conta?</Text>
      <Text className={`text-[14px] font-bold ml-1 ${color}`}>Login</Text>
    </View>
  );
}

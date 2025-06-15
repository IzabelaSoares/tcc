import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

interface props {
  variant?: "default" | "black";
}

export default function LoginLink({ variant }: props) {
  const navigation = useNavigation<any>();
  const onPress = () => navigation.navigate("Login");
  const color = variant === "black" ? "text-black-" : "text-white";

  return (
    <View className="flex-row justify-center">
      <Text className={`text-base ${color}`}>Já possuí uma conta?</Text>
      <Text className={`text-base font-bold ml-1 ${color}`} onPress={onPress}>
        Login
      </Text>
    </View>
  );
}

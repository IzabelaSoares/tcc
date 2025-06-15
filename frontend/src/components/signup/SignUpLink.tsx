import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

export default function SignUpLink() {
  const navigation = useNavigation<any>();
  const onPress = () => navigation.navigate("SignUp");

  return (
    <View className="flex-row justify-center">
      <Text className="text-base text-white">Não possuí uma conta?</Text>
      <Text className="text-base font-bold ml-1 text-white" onPress={onPress}>
        Cadastrar
      </Text>
    </View>
  );
}

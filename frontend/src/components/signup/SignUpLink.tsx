import { View, Text } from "react-native";

export default function SignUpLink() {
  return (
    <View className="flex-row justify-center">
      <Text className={`text-base text-white`}>Não possuí uma conta?</Text>
      <Text className={`text-base font-bold ml-1 text-white`}>Cadastrar</Text>
    </View>
  );
}

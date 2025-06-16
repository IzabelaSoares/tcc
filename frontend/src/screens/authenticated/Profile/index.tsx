import { View, Text } from "react-native";
import { LogoTitle } from "../../../components/logo";

export default function Profile() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <LogoTitle textColor="text-white" />
      <Text>Perfil</Text>
    </View>
  );
}

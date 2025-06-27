import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";

interface props {
  routeName: string;
}

export default function FloatButton({ routeName }: props) {
  const navigation = useNavigation<any>();
  const onPress = () => navigation.navigate(routeName);
  return (
    <View className="absolute bottom-0 right-0 px-4 pb-4 mb-24">
      <TouchableOpacity
        className="bg-primary w-20 h-20 rounded-full shadow-lg items-center justify-center"
        onPress={onPress}
      >
        <Text className="text-white text-5xl">+</Text>
      </TouchableOpacity>
    </View>
  );
}

import { TouchableOpacity, View, Text } from "react-native";

interface props {
  options: string[];
  onPress: (option: string, open: boolean) => void;
}

export default function FormFieldInputSelectOptions({
  options,
  onPress,
}: props) {
  return (
    <View className="bg-white rounded-lg border-gray-300 mt-1">
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          className="px-2 py-2 hover:bg-gray-100"
          onPress={() => onPress(option, false)}
        >
          <Text className="text-sm text-black-100">{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

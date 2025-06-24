import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

interface props {
  onPress: () => void;
  value?: string;
  placeholder?: string;
  label: string;
}

export default function FormFieldInputSelectValue({
  onPress,
  value = "",
  placeholder = "",
  label,
}: props) {
  return (
    <View className="w-full h-14 bg-white rounded-lg justify-center px-2 mb-2">
      <TouchableOpacity onPress={onPress}>
        <Text className="text-black-100 text-base font-medium mb-1">
          {label}
        </Text>
        <Text className="text-sm text-black-100">{value || placeholder}</Text>
      </TouchableOpacity>
    </View>
  );
}

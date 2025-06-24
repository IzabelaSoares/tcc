import { TextInput, View, Text } from "react-native";
import { FormFieldType } from "../../types/FormFieldType";

interface props {
  field: FormFieldType;
  value: string;
  onChange: (text: string) => void;
}

export function FormFieldInputArea({ field, value, onChange }: props) {
    const color = "text-black-100 placeholder:text-gray-800"
  return (
    <View className="w-full h-28 bg-white rounded-lg justify-center px-2 mb-2">
      <Text className="text-black-100 text-base font-medium mb-1">
        {field.label}
      </Text>
      <TextInput
        className={`h-20 text-sm ${color}`}
        placeholder={field.placeholder}
        value={value}
        multiline
        numberOfLines={3}
        textAlignVertical="top"
        onChangeText={onChange}
      />
    </View>
  );
}

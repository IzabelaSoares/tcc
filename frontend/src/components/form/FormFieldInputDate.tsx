import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { FormFieldType } from "../../types/FormFieldType";
import useFormFieldInputDate from "./useFormFieldInputDate";

interface props {
  field: FormFieldType;
  value: string;
  onChange: (text: string) => void;
}

export function FormFieldInputDate({ field, value, onChange }: props) {
  const color = "text-black-100 placeholder:text-gray-800";
  const { handleChange } = useFormFieldInputDate({ onChange });
  return (
    <View className="w-full h-14 bg-white rounded-lg justify-center px-2 mb-2">
      <Text className="text-black-100 text-base font-medium mb-1">
        {field.label}
      </Text>
      <TextInput
        className={`h-[21px] p-0 text-sm ${color}`}
        placeholder={field.placeholder || "DD/MM/AAAA"}
        keyboardType="numeric"
        maxLength={10}
        value={value}
        onChangeText={handleChange}
      />
    </View>
  );
}

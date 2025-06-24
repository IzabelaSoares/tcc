import { TextInput, View, Text } from "react-native";
import { FormFieldType } from "../../types/FormFieldType";

interface props<T extends readonly FormFieldType[]> {
  field: FormFieldType;
  value: string;
  onChange: (text: string) => void;
}

export function FormFieldInput<T extends readonly FormFieldType[]>({
  field,
  value,
  onChange,
}: props<T>) {
  const color = "text-black-100 placeholder:text-gray-800";
  return (
    <View className="w-full h-14 bg-white rounded-lg justify-center px-2 mb-2">
      <Text className="text-black-100 text-base font-medium mb-1">
        {field.label}
      </Text>
      <TextInput
        className={`h-[21px] p-0 text-sm ${color}`}
        placeholder={field.placeholder}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

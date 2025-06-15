import { FormField, FormValues } from "../../types/FormFieldType";
import { TextInput, View, Text } from "react-native";

interface Props<T extends readonly FormField[]> {
  fields: T;
  formValues: FormValues<T>;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues<T>>>;
}

export function FormFieldsRenderer<T extends readonly FormField[]>({
  fields,
  formValues,
  setFormValues,
}: Props<T>) {
  const colors = "text-black-100 text-sm placeholder:text-gray-800"
  return (
    <>
      {fields.map((field) => (
        <View
          key={field.id}
          className="w-full h-14 bg-white rounded-lg border border-gray-200 justify-center px-2 mb-2"
        >
          <Text className="text-black-100 text-base font-medium mb-1">
            {field.label}
          </Text>
          <TextInput
            className={`h-[21px] p-0 text-sm ${colors}`}
            key={field.id}
            placeholder={field.placeholder}
            value={formValues[field.id as keyof FormValues<T>]}
            secureTextEntry={field.type === "password"}
            onChangeText={(text) =>
              setFormValues((prev) => ({ ...prev, [field.id]: text }))
            }
          />
        </View>
      ))}
    </>
  );
}

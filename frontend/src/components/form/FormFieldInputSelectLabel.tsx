import { Text } from "react-native";

interface props {
  label: string;
}

export default function FormFieldInputSelectLabel({ label }: props) {
  return (
    <Text className="text-black-100 text-base font-medium mb-1">{label}</Text>
  );
}

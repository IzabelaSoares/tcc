import { Text, TouchableOpacity } from "react-native";
import { DropdownItemType } from "../../../types/DropdownItemType";

interface props {
  item: DropdownItemType;
}

export default function DropdownItem({ item }: props) {
  return (
    <TouchableOpacity onPress={item.onClick} className="px-4 py-2 hover:bg-gray-100">
      <Text className="text-xl">{item.label}</Text>
    </TouchableOpacity>
  );
}

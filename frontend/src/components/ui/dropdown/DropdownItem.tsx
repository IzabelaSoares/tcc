import { Text, TouchableOpacity } from "react-native";
import { DropdownItemType } from "../../../types/DropdownItemType";

interface props {
  item: DropdownItemType;
  onClose: () => void;
}

export default function DropdownItem({ item, onClose }: props) {
  const onPress = () => {
    item.onClick();
    onClose();
  };

  return (
    <TouchableOpacity onPress={onPress} className="px-4 py-2 hover:bg-gray-100">
      <Text className="text-xl">{item.label}</Text>
    </TouchableOpacity>
  );
}

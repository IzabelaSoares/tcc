import { View } from "react-native";
import DropdownItem from "./DropdownItem";
import { DropdownItemType } from "../../../types/DropdownItemType";

interface props {
  open: boolean;
  items: DropdownItemType[];
  onClose: () => void;
}

export default function DropdownContainer({ items, open, onClose }: props) {
  const DropContainer = () =>
    open ? (
      <View className="absolute top-12 right-0 w-36 bg-white rounded-2xl py-2">
        {items.map((item, index) => (
          <DropdownItem item={item} key={`dropdown-item-${index}`} onClose={onClose}/>
        ))}
      </View>
    ) : (
      <></>
    );
  return <DropContainer />;
}

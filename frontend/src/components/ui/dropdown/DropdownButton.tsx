import { TouchableOpacity } from "react-native";

interface props {
  onPress: () => void;
  Icon: React.JSX.Element;
}

export default function DropdownButton({ onPress, Icon }: props) {
  return (
    <TouchableOpacity className="p-2 mr-2" onPress={onPress}>
      {Icon}
    </TouchableOpacity>
  );
}

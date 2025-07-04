import { View } from "react-native";
import { Button } from "../ui";

interface props {
  onEdit: () => void;
  onRemove: () => void;
}

export default function AddressListButtons({ onRemove, onEdit }: props) {
  return (
    <View className="w-1/3 pl-6">
      <Button
        title="Editar"
        variant="primary"
        className="mb-2 h-12"
        textClassName="text-base text-white"
        onPress={onEdit}
      />
      <Button
        title="Excluir"
        variant="default"
        className="h-12"
        textClassName="text-base text-green-700"
        onPress={onRemove}
      />
    </View>
  );
}

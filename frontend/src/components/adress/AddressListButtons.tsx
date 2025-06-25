import { View } from "react-native";
import { Button } from "../ui";

export default function AddressListButtons() {
  return (
    <View className="w-1/3 pl-6">
      <Button
        title="Editar"
        variant="primary"
        className="mb-2 h-12"
        textClassName="text-base text-white"
      />
      <Button
        title="Excluir"
        variant="default"
        className="h-12"
        textClassName="text-base text-green-700"
      />
    </View>
  );
}

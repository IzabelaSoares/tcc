import React from "react";
import { View } from "react-native";
import { Button } from "../../ui";

interface props {
  onPressConfirm: () => void;
  onPressCancel: () => void;
}

export default function EditConfirmCancelButton({
  onPressCancel,
  onPressConfirm,
}: props) {

  return (
    <View className="flex-row justify-between mx-4 pr-4 mt-4">
      <Button
        variant="default"
        title="Cancelar"
        className="w-1/2 mr-2 h-[45px]"
        onPress={onPressCancel}
      />
      <Button
        variant="primary"
        title="Salvar"
        className="w-1/2 ml-2 h-[45px]"
        onPress={onPressConfirm}
      />
    </View>
  );
}

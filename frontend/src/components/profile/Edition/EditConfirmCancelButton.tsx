import React from "react";
import { View } from "react-native";
import { Button } from "../../ui";

export default function EditConfirmCancelButton() {
  return (
    <View className="flex-row justify-between mx-4 pr-4 mt-4">
      <Button
        variant="default"
        title="Cancelar"
        className="w-1/2 mr-2 h-[45px] border-2"
      />
      <Button
        variant="primary"
        title="Salvar"
        className="w-1/2 ml-2 h-[45px]"
      />
    </View>
  );
}

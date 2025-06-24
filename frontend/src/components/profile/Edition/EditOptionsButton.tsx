import React from "react";
import { View } from "react-native";
import { Button } from "../../ui";
import { useNavigation } from "@react-navigation/native";

export default function EditOptionsButton() {
  const navigation = useNavigation<any>();
  const onPressAddress = () => navigation.navigate("Address");
  return (
    <View className="flex flex-col justify-start mx-4">
      <Button
        variant="default"
        title="Meus endereços"
        className="w-full h-[56px] mb-2"
        onPress={onPressAddress}
      />
      <Button
        variant="default"
        title="Alterar email"
        className="w-full h-[56px] mb-2"
      />
      <Button
        variant="default"
        title="Alterar senha"
        className="w-full h-[56px]"
      />
    </View>
  );
}

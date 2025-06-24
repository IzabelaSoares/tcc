import React from "react";
import { Button, ContentCard } from "../../ui";
import ProfileEditionForm from "./EditionForm";
import { View } from "react-native";

export default function ProfileEdition() {
  return (
    <>
      <ContentCard className="bg" top={0.25}>
        <ProfileEditionForm />
        <View className="flex flex-col justify-start mx-4">
          <Button
            variant="default"
            title="Meus endereços"
            className="w-full h-[56px] mb-2"
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
        <View className="flex-row justify-between mx-4 pr-4 mt-4">
          <Button
            variant="default"
            title="Cancelar"
            className="w-1/2 mr-2 h-[45px]"
          />
          <Button
            variant="primary"
            title="Salvar"
            className="w-1/2 ml-2 h-[45px]"
          />
        </View>
      </ContentCard>
    </>
  );
}

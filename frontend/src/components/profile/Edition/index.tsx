import React from "react";
import { ContentCard } from "../../ui";
import ProfileEditionForm from "./EditionForm";
import { UsuarioProfileResponseDTO } from "../../../../dtos/usuario/UsuarioProfileResponse";

interface props {
  onChangeEditing: (isEditing: boolean) => void;
  profile: UsuarioProfileResponseDTO
}

export default function ProfileEdition(profileEditionProps: props) {
  return (
    <>
      <ContentCard className="bg" top={0.25}>
        <ProfileEditionForm {...profileEditionProps} />
      </ContentCard>
    </>
  );
}

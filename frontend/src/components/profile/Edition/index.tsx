import React from "react";
import { ContentCard } from "../../ui";
import ProfileEditionForm from "./EditionForm";

interface props {
  onChangeEditing: (isEditing: boolean) => void;
}

export default function ProfileEdition({ onChangeEditing }: props) {
  return (
    <>
      <ContentCard className="bg" top={0.25}>
        <ProfileEditionForm onChangeEditing={onChangeEditing}  />
      </ContentCard>
    </>
  );
}

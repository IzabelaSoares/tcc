import React from "react";
import { ContentCard } from "../../ui";
import ProfileEditionForm from "./EditionForm";
import EditConfirmCancelButton from "./EditConfirmCancelButton";
import EditOptionsButton from "./EditOptionsButton";

export default function ProfileEdition() {
  return (
    <>
      <ContentCard className="bg" top={0.25}>
        <ProfileEditionForm />
        <EditOptionsButton />
        <EditConfirmCancelButton />
      </ContentCard>
    </>
  );
}

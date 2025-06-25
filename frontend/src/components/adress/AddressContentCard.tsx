import React, { useState } from "react";
import { ContentCard } from "../ui";
import AddressApresentation from "./Apresentation/AddressApresentation";
import AddressEdition from "./Edition/AddressEdition";

export default function AddressContentCard() {
  const [isEditing, setIsEditing] = useState<boolean>(true);

  const Address = () =>
    isEditing ? <AddressEdition /> : <AddressApresentation />;

  return (
    <ContentCard top={0.2}>
      <Address />
    </ContentCard>
  );
}

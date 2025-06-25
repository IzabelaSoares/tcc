import React from "react";
import AddressEditionButtons from "./AddressEditionButtons";
import AddressCard from "./AddressCard";
import AddressEditionForm from "./AddressEditionForm";

export default function AddressEdition() {
  return (
    <>
      <AddressCard />
      <AddressEditionForm/>
      <AddressEditionButtons />
    </>
  );
}

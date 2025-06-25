import React from "react";
import { ContentCard } from "../ui";
import AddressList from "./AddressList";
import AddressButtons from "./AddressButtons";

export default function AddressContentCard() {
  return (
    <ContentCard top={0.2}>
      <AddressList />
      <AddressButtons />
    </ContentCard>
  );
}

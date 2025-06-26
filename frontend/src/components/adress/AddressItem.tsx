import React from "react";
import { View } from "react-native";
import AddressDetails from "./AddressDetails";
import AddressListButtons from "./AddressListButtons";

interface props {
  item: {
    key: string;
    title: string;
    address: string;
  };
}

export default function AddressItem({ item }: props) {
  return (
    <View
      key={item.key}
      className="flex flex-row my-2 py-2 border-b-[1px] border-gray-100"
    >
      <AddressDetails title={item.title} address={item.address} />
      <AddressListButtons />
    </View>
  );
}

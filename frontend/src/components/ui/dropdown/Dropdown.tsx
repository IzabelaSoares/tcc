import React, { useState } from "react";
import { View } from "react-native";
import { DropdownItemType } from "../../../types/DropdownItemType";
import DropdownButton from "./DropdownButton";
import DropdownContainer from "./DropdownContainer";

interface props {
  items?: DropdownItemType[];
  Icon: React.JSX.Element;
}

export default function Dropdown({ items = [], Icon }: props) {
  const [open, setOpen] = useState(false);

  return (
    <View className="relative z-10 justify-end items-end mr-4">
      <DropdownButton onPress={() => setOpen(!open)} Icon={Icon} />
      <DropdownContainer items={items} open={open} />
    </View>
  );
}

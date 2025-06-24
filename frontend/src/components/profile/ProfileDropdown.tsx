import React from "react";
import { Dropdown } from "../ui";
import { DropdownItemType } from "../../types/DropdownItemType";
import { IconMenuHamburger } from "../icon";

interface props {
  items: DropdownItemType[];
}

export default function ProfileDropdown({ items }: props) {
  return <Dropdown items={items} Icon={<IconMenuHamburger />} />;
}

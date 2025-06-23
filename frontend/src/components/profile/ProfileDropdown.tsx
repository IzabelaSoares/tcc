import React from "react";
import { Dropdown } from "../ui";
import { DropdownItemType } from "../../types/DropdownItemType";
import { IconMenuHamburger } from "../icon";

export default function ProfileDropdown() {
  const items: DropdownItemType[] = [
    {
      label: "Editar",
      onClick: () => {},
    },
    {
      label: "Sair",
      onClick: () => {},
    },
  ];
  return <Dropdown items={items} Icon={<IconMenuHamburger />} />;
}

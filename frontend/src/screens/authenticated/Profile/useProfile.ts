import React, { useState } from "react";
import { DropdownItemType } from "../../../types/DropdownItemType";
import { useAuth } from "../../../context/AuthContext";

export default function useProfile() {
  const { logout } = useAuth();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const items: DropdownItemType[] = [
    {
      label: "Editar",
      onClick: () => setIsEditing(true),
    },
    {
      label: "Sair",
      onClick: () => logout(),
    },
  ];

  return {
    items,
    isEditing,
    setIsEditing,
    logout,
  };
}

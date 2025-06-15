import React from "react";
import { View, TouchableOpacity } from "react-native";
import { IconHome, IconPeople, IconSearch, IconBook, IconUser } from "../icon";

interface navigationItemsProps {
  icon: React.ReactNode;
  label: string;
}

export default function Menu() {
  const navigationItems: navigationItemsProps[] = [
    { icon: <IconHome />, label: "Home" },
    { icon: <IconPeople />, label: "Group" },
    { icon: <IconSearch />, label: "Search" },
    { icon: <IconBook />, label: "Book" },
    { icon: <IconUser />, label: "Profile" },
  ];

  return (
    <View className="absolute bottom-0 left-0 right-0 h-24 bg-background flex-row items-center justify-between px-4 pb-8 pt-4">
      {navigationItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="w-12 h-12 p-0 rounded-full items-center justify-center"
          accessibilityLabel={item.label}
        >
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
}

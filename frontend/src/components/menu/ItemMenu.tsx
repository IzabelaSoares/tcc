import React from "react";
import { ItemMenuType } from "../../types/ItemMenuType";
import { TouchableOpacity } from "react-native";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";

interface props {
  item: ItemMenuType;
  isFocused: boolean;
  index: number;
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

export default function ItemMenu({
  item,
  isFocused,
  index,
  state,
  navigation,
}: props) {
  const onPress = (item: ItemMenuType, index: number, isFocused: boolean) => {
    const event = navigation.emit({
      type: "tabPress",
      target: state.routes[index].key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(item.routeName);
    }
  };

  return (
    <TouchableOpacity
      key={`menu-item-${index}`}
      onPress={() => onPress(item, index, isFocused)}
      className={`w-12 h-12 p-0 rounded-full items-center justify-center ${
        isFocused ? "bg-gray-200" : ""
      }`}
      accessibilityLabel={item.label}
    >
      {item.icon}
    </TouchableOpacity>
  );
}

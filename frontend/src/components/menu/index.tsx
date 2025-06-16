import { View } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ItemMenuType } from "../../types/ItemMenuType";
import { NAVIGATION_MENU } from "../../navigation/Menu";
import { IconHome, IconPeople, IconSearch, IconBook, IconUser } from "../icon";
import ItemMenu from "./ItemMenu";

const navigationItems: ItemMenuType[] = [
  { icon: <IconHome />, label: "HomeStack", routeName: "HomeStack" },
  {
    icon: <IconPeople />,
    label: "Community",
    routeName: NAVIGATION_MENU.COMMUNITY.name,
  },
  {
    icon: <IconSearch />,
    label: "Search",
    routeName: NAVIGATION_MENU.SEARCH.name,
  },
  { icon: <IconBook />, label: "Book", routeName: NAVIGATION_MENU.BOOK.name },
  {
    icon: <IconUser />,
    label: "Profile",
    routeName: NAVIGATION_MENU.PROFILE.name,
  },
];

export default function Menu({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View className="absolute bottom-0 left-0 right-0 h-24 bg-background flex-row items-center justify-between px-4 pb-8 pt-4">
      {navigationItems.map((item, index) => (
        <ItemMenu
          isFocused={state.index === index}
          item={item}
          index={index}
          state={state}
          navigation={navigation}
        />
      ))}
    </View>
  );
}

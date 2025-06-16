import { View, TouchableOpacity } from "react-native";
import { IconHome, IconPeople, IconSearch, IconBook, IconUser } from "../icon";
import { NAVIGATION_MENU } from "../../navigation/Menu";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function Menu({ state, descriptors, navigation }: BottomTabBarProps) {
  const navigationItems = [
    { icon: <IconHome />, label: "HomeStack", routeName: "HomeStack" },
    { icon: <IconPeople />, label: "Community", routeName: NAVIGATION_MENU.COMMUNITY.name },
    { icon: <IconSearch />, label: "Search", routeName: NAVIGATION_MENU.SEARCH.name },
    { icon: <IconBook />, label: "Book", routeName: NAVIGATION_MENU.BOOK.name },
    { icon: <IconUser />, label: "Profile", routeName: NAVIGATION_MENU.PROFILE.name },
  ];

  return (
    <View className="absolute bottom-0 left-0 right-0 h-24 bg-background flex-row items-center justify-between px-4 pb-8 pt-4">
      {navigationItems.map((item, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          
          const event = navigation.emit({
            type: 'tabPress',
            target: state.routes[index].key,
            canPreventDefault: true,
          });
 
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(item.routeName);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            className={`w-12 h-12 p-0 rounded-full items-center justify-center ${
              isFocused ? 'bg-gray-200' : ''
            }`}
            accessibilityLabel={item.label}
          >
            {item.icon}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

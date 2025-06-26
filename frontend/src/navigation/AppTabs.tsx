import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppStack from "./AppStack";
import Menu from "../components/menu";
import {
  AddressScreen,
  BookFavoriteScreen,
  BookScreen,
  CommunityScreen,
  ProfileScreen,
  SearchSreen,
} from "../screens/authenticated";
import { NAVIGATION_MENU } from "./Menu";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <Menu {...props} />}
    >
      <Tab.Screen name="HomeStack" component={AppStack} />
      <Tab.Screen
        name={NAVIGATION_MENU.COMMUNITY.name}
        component={CommunityScreen}
      />
      <Tab.Screen name={NAVIGATION_MENU.SEARCH.name} component={SearchSreen} />
      <Tab.Screen name={NAVIGATION_MENU.BOOK.name} component={BookScreen} />
      <Tab.Screen
        name={NAVIGATION_MENU.PROFILE.name}
        component={ProfileScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.ADDRESS.name}
        component={AddressScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.BOOK_FAVORITE.name}
        component={BookFavoriteScreen}
      />
    </Tab.Navigator>
  );
}

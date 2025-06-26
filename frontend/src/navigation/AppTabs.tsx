import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppStack from "./AppStack";
import Menu from "../components/menu";
import * as Screens from "../screens/authenticated";
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
        component={Screens.CommunityScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.SEARCH.name}
        component={Screens.SearchSreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.BOOK.name}
        component={Screens.BookScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.PROFILE.name}
        component={Screens.ProfileScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.ADDRESS.name}
        component={Screens.AddressScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.BOOK_FAVORITE.name}
        component={Screens.BookFavoriteScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.BOOK_BORROW.name}
        component={Screens.BookBorrowScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.BOOK_DIGITAL.name}
        component={Screens.BookDigitalScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.BOOK_PHYSICAL.name}
        component={Screens.BookPhysicalScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.BOOK_READ.name}
        component={Screens.BookReadScreen}
      />
      <Tab.Screen
        name={NAVIGATION_MENU.BOOK_SHARED.name}
        component={Screens.BookSharedScreen}
      />
    </Tab.Navigator>
  );
}

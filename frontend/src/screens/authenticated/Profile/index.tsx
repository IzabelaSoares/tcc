import { View,  } from "react-native";
import {
  ProfileAboutCard,
  ProfileAvatar,
  ProfileBottomSheet,
  ProfileDropdown,
  ProfileSubTitle,
  ProfileTitle,
} from "../../../components/profile";

export default function Profile() {
  return (
    <View className="flex-1 bg-primary pt-20">
      <ProfileDropdown />
      <ProfileAvatar userName="Izabela Soares" />
      <ProfileTitle userName={"Izabela Soares"} />
      <ProfileSubTitle userTitle={"Exploradora"} />
      <ProfileAboutCard />
      <ProfileBottomSheet />
    </View>
  );
}

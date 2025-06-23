import { View,  } from "react-native";
import {
  ProfileAboutCard,
  ProfileAvatar,
  ProfileBottomSheet,
  ProfileSubTitle,
  ProfileTitle,
} from "../../../components/profile";

export default function Profile() {
  return (
    <View className="flex-1 bg-primary pt-20">
      <ProfileAvatar userName="Izabela Soares" />
      <ProfileTitle userName={"Izabela Soares"} />
      <ProfileSubTitle userTitle={"Exploradora"} />
      <ProfileAboutCard />
      <ProfileBottomSheet />
    </View>
  );
}

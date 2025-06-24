import { View,  } from "react-native";
import {
  ProfileApresentation,
  ProfileAvatar,
  ProfileDropdown,
  ProfileEdition,
} from "../../../components/profile";

export default function Profile() {
  return (
    <View className="flex-1 bg-primary pt-20">
      <ProfileDropdown />
      <ProfileAvatar userName="Izabela Soares" />
      {/** <ProfileApresentation/> */}
      <ProfileEdition/>
    </View>
  );
}

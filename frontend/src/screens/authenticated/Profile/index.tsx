import { View } from "react-native";
import {
  ProfileApresentation,
  ProfileAvatar,
  ProfileDropdown,
  ProfileEdition,
} from "../../../components/profile";
import useProfile from "./useProfile";

export default function Profile() {
  const { items, isEditing, setIsEditing } = useProfile();

  const ProfileContent = () =>
    isEditing ? (
      <ProfileEdition onChangeEditing={() => setIsEditing(false)} />
    ) : (
      <ProfileApresentation />
    );

  return (
    <View className="flex-1 bg-primary pt-20">
      <ProfileDropdown items={items} />
      <ProfileAvatar userName="Izabela Soares" />
      <ProfileContent />
    </View>
  );
}

import { Avatar } from "../ui";
import { View } from "react-native";

interface props {
  userName: string;
}

export default function ProfileAvatar({ userName }: props) {
  return (
    <View className="items-center mb-4">
      <Avatar name={userName} />
    </View>
  );
}

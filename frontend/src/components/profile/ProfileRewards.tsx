import { View } from "react-native";
import ProfileRewardCard from "./ProfileRewardCard";
import { IconBox, IconLamp, IconMap, IconPicture } from "../icon";

export default function ProfileRewards() {
  return (
    <View className="flex-row mt-6">
      <ProfileRewardCard Icon={<IconMap />} color={"bg-purple-200"} />
      <ProfileRewardCard Icon={<IconBox />} color={"bg-pink-200"} />
      <ProfileRewardCard Icon={<IconLamp />} color={"bg-red-200"} />
      <ProfileRewardCard Icon={<IconPicture />} color={"bg-blue-200"} />
    </View>
  );
}

import { View } from "react-native";
import ProfileStatisticsData from "./ProfileStatisticsData";

export default function ProfileStatistics() {
  return (
    <>
      <View className="flex-row justify-center">
        <ProfileStatisticsData title="Compartilhados" description="16" />
        <ProfileStatisticsData title="Lidos" description="4" />
      </View>
      <View className="flex-row justify-center">
        <ProfileStatisticsData color="bg-brown-600" title="Seguidores" description="26" />
        <ProfileStatisticsData color="bg-brown-600" title="Compartilhados" description="16" />
      </View>
    </>
  );
}

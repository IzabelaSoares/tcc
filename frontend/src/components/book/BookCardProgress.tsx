import { View } from "react-native";
import { ProgressCircle } from "../ui";

interface props {
  percentage: number
}

export default function BookCardProgress({ percentage }: props) {
  return (
    <View className="h-full aspect-square pl-4 justify-center items-center mr-6">
      <ProgressCircle percentage={percentage} />
    </View>
  );
}

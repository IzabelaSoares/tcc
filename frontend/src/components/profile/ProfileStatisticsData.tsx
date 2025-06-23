import { Text } from "react-native";
import { Card } from "../ui";

interface props {
  title: string;
  description: string;
  color?: string
}

export default function ProfileStatisticsData({ title, description, color = "bg-primary" }: props) {
  return (
    <Card className={`justify-center items-center h-[50px] w-[150px] mx-4 my-2 rounded-2xl ${color}`}>
      <Text className="text-base text-white">{title}</Text>
      <Text className="text-base text-white">{description}</Text>
    </Card>
  );
}

import { Text, TouchableOpacity } from "react-native";
import { Card } from "../ui";
import { useNavigation } from "@react-navigation/native";

interface props {
  title: string;
  count: number;
  routeName: string;
}

export default function BookCategoryCard({ title, count, routeName }: props) {
  const navigation = useNavigation<any>();
  const onPress = () => navigation.navigate(routeName);
  return (
    <TouchableOpacity onPress={onPress}>
      <Card className="rounded-[1rem] bg-primary-dark px-6 py-6 my-2 mx-2 flex-row justify-between items-center">
        <Text className="text-xl text-white font-semibold">{title}</Text>
        <Text className="text-xl text-white font-semibold">{count}</Text>
      </Card>
    </TouchableOpacity>
  );
}

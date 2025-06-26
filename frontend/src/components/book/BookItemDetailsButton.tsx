import { Text, View } from "react-native";
import { Button } from "../ui";

export default function BookItemDetailsButton() {
  return (
    <View className="h-20 justify-end pb-2 pr-6">
      <Button title="Mais detalhes" variant="primary" />
    </View>
  );
}

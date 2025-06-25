import { Text } from "react-native";
import { Card } from "../../ui";

export default function AddressCard() {
  return (
    <Card className="h-[80px] rounded-[1rem] bg-stone-100 px-2 mt-6 mx-2 flex-row justify-between items-center">
      <Text className="text-base">
        Para sua segurança, coloque apenas endereços de lugares públicos
        (escola, shopping, parque, etc).
      </Text>
    </Card>
  );
}

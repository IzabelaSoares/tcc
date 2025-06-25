import { View } from "react-native";
import AddressItem from "./AddressItem";

const items = [
  {
    key: "1",
    title: "Escola",
    address:
      "Rua Dr. Pedro Zimmermann, 2461 - Itoupavazinha, Blumenau - SC, 89066-000",
  },
  {
    key: "2",
    title: "Parque",
    address:
      "Rua Dr. Pedro Zimmermann, 2461 - Itoupavazinha, Blumenau - SC, 89066-000",
  },
  {
    key: "3",
    title: "Biblioteca",
    address:
      "Rua Dr. Pedro Zimmermann, 2461 - Itoupavazinha, Blumenau - SC, 89066-000",
  },
];

export default function AddressList() {
  return (
    <View className="mt-8 mx-4">
      {items.map((item) => (
        <AddressItem key={item.key} item={item} />
      ))}
    </View>
  );
}

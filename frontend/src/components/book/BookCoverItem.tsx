import { View } from "react-native";
import { Illustration } from "../ui";

export default function BookCoverItem() {
  return (
    <View className="bg mr-2">
      <Illustration
        className="w-[102px] h-[147px]"
        source={{
          uri: "https://books.google.com.br/books/content?id=Py8u3Obs4f4C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72MSG8ekJ4sZVs1-_l9W-Wgo2Cr6iEZzRbPZ1hxY9V9P63arOHfMigGSNNrON0YfBEBIn6r8V9_dPQn7cdSWTYpL7hL91WArTsh7a-v-OnLATP6q3bo1HEgE5qfWb1kY1tQr08r",
        }}
        resizeMode="cover"
      />
    </View>
  );
}

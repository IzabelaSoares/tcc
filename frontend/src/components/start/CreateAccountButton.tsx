import { useNavigation } from "@react-navigation/native";
import Button from "../ui/button/Button";

export default function CreateAccountButton() {
  const navigation = useNavigation<any>();
  const onPress = () => navigation.navigate("SignUp");
  
  return (
    <Button
      variant="primary"
      title="Criar conta"
      className="w-full max-w-[340px] h-[56px] mb-6"
      onPress={onPress}
    />
  );
}

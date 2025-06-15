import { View } from "react-native";
import { LogoTitle } from "../../components/logo";
import { LoginLink } from "../../components/link";
import Tagline from "../../components/home/Tagline";
import Illustration from "../../components/home/Illustration";
import CreateAccountButton from "../../components/home/CreateAccountButton";

export default function Login() {
  return (
    <View className="flex-1 justify-center items-center bg-primary px-6">
      <LogoTitle textColor="text-white" />
      <Tagline />
      <Illustration />
      <CreateAccountButton />
      <LoginLink />
    </View>
  );
}

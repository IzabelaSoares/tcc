import { View } from "react-native";
import LogoTitle from "../../components/home/LogoTitle";
import Tagline from "../../components/home/Tagline";
import Illustration from "../../components/home/Illustration";
import CreateAccountButton from "../../components/home/CreateAccountButton";
import LoginLink from "../../components/home/LoginLink";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-primary px-6">
      <LogoTitle />
        <Tagline />
        <Illustration />
        <CreateAccountButton />
        <LoginLink />
    </View>
  );
}

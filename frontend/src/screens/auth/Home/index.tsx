import { View } from "react-native";
import { LogoTitle, TagLine } from "../../../components/logo";
import { ForgotPassword, LoginLink } from "../../../components/login";
import { Illustration, CreateAccountButton } from "../../../components/home";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-primary px-6">
      <LogoTitle textColor="text-white" />
      <TagLine />
      <Illustration />
      <CreateAccountButton />
      <LoginLink />
      <ForgotPassword/>
    </View>
  );
}

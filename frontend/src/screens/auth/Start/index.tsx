import { View } from "react-native";
import { LogoTitle, TagLine } from "../../../components/logo";
import { ForgotPassword, LoginLink } from "../../../components/login";
import { CreateAccountButton } from "../../../components/start";
import loginImage from "../../../../assets/images/login.png";
import { Illustration } from "../../../components/ui";

export default function Start() {
  return (
    <View className="flex-1 justify-center items-center bg-primary px-6">
      <LogoTitle textColor="text-white" />
      <TagLine />
      <Illustration className="w-[260px] h-[300px] mb-8" source={loginImage} resizeMode="contain" />
      <CreateAccountButton />
      <LoginLink />
      <ForgotPassword/>
    </View>
  );
}

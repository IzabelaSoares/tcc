import { View } from "react-native";
import { LogoTitle, TagLine } from "../../components/logo";
import { SignUpLink } from "../../components/signup";
import {
  ForgotPassword,
  LoginForm,
  LoginGoogleButton,
  LoginButton,
  LoginSeparator
} from "../../components/login";

export default function Login() {
  return (
    <View className="flex-1 justify-center items-center bg-primary px-6">
      <LogoTitle textColor="text-white" />
      <TagLine />
      <LoginForm />
      <LoginButton />
      <LoginSeparator/>
      <LoginGoogleButton />
      <SignUpLink />
      <ForgotPassword />
    </View>
  );
}

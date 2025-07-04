import React from "react";
import { View } from "react-native";
import { LogoTitle } from "../../../components/logo";
import { LoginGoogleButton, LoginLink } from "../../../components/login";
import {
  SignUpSeparator,
  SignUpForm,
} from "../../../components/signup";

export default function SignUp() {
  return (
    <View className="flex-1 justify-center items-center bg px-6">
      <LogoTitle textColor="text-primary" />
      <LoginGoogleButton />
      <SignUpSeparator />
      <SignUpForm />
      <LoginLink variant="black" />
    </View>
  );
}

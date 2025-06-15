import React from "react";
import { View } from "react-native";
import { LogoTitle } from "../../components/logo";
import {
  LoginGoogleButton,
  SignUpSeparator,
  SignUpForm,
  SignUpButton,
} from "../../components/signup";
import { LoginLink } from "../../components/link";

export default function SignUp() {
  return (
    <View className="flex-1 justify-center items-center bg px-6">
      <LogoTitle textColor="text-primary" />
      <LoginGoogleButton />
      <SignUpSeparator />
      <SignUpForm />
      <SignUpButton />
      <LoginLink variant="black" />
    </View>
  );
}

import React, { useState } from "react";
import { View } from "react-native";
import { FormValues } from "../../types/FormFieldType";
import { FormFieldsRenderer } from "../form/FormFieldsRenderer";
import { loginFormFields } from "./formFields";
import LoginButton from "./LoginButton";
import { AuthRequestDTO } from "../../../dtos/auth/AuthRequest";
import { useAuth } from "../../context/AuthContext";

type CadastroFormValues = FormValues<typeof loginFormFields>;

export default function LoginForm() {
  const { login } = useAuth();
  const [formValues, setFormValues] = useState<CadastroFormValues>(
    loginFormFields.reduce(
      (acc, field) => ({ ...acc, [field.id]: field.value }),
      {} as CadastroFormValues
    )
  );

  const loginUser = () => {
    let credentials: AuthRequestDTO = {
      email: formValues.email,
      senha: formValues.senha,
    };
    login(credentials);
  };

  return (
    <>
      <View className=" space-y-2 mb-4 w-full max-w-[340px]">
        <FormFieldsRenderer
          fields={loginFormFields}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      </View>
      <LoginButton login={loginUser} />
    </>
  );
}

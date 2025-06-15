import React, { useState } from "react";
import { View } from "react-native";
import { FormValues } from "../../types/FormFieldType";
import { FormFieldsRenderer } from "../form/FormFieldsRenderer";
import { loginFormFields } from "./formFields";

type CadastroFormValues = FormValues<typeof loginFormFields>;

export default function SignUpForm() {
  const [formValues, setFormValues] = useState<CadastroFormValues>(
    loginFormFields.reduce(
      (acc, field) => ({ ...acc, [field.id]: field.value }),
      {} as CadastroFormValues
    )
  );

  return (
    <View className=" space-y-2 mb-4 w-full max-w-[340px]">
      <FormFieldsRenderer
        fields={loginFormFields}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </View>
  );
}

import React, { useState } from "react";
import { View } from "react-native";
import TermsCheckbox from "./TermsCheckbox";
import { FormValues } from "../../types/FormFieldType";
import { FormFieldsRenderer } from "../form/FormFieldsRenderer";
import { cadastroFormFields } from "./formFields";

type CadastroFormValues = FormValues<typeof cadastroFormFields>;

export default function SignUpForm() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formValues, setFormValues] = useState<CadastroFormValues>(
    cadastroFormFields.reduce(
      (acc, field) => ({ ...acc, [field.id]: field.value }),
      {} as CadastroFormValues
    )
  );

  return (
    <View className=" space-y-2 mb-4 w-full max-w-[340px]">
      <FormFieldsRenderer
        fields={cadastroFormFields}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <TermsCheckbox
        setAcceptedTerms={setAcceptedTerms}
        acceptedTerms={acceptedTerms}
      />
    </View>
  );
}

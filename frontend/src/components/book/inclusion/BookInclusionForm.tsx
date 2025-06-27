import React, { useState } from "react";
import { View } from "react-native";
import { FormValues } from "../../../types/FormFieldType";
import { FormFieldsRenderer } from "../../form/FormFieldsRenderer";
import { bookInclusionFormFields } from "./formFields";

type EditFormValues = FormValues<typeof bookInclusionFormFields>;

export default function BookInclusionForm() {
  const [formValues, setFormValues] = useState<EditFormValues>(
    bookInclusionFormFields.reduce(
      (acc, field) => ({ ...acc, [field.id]: field.value }),
      {} as EditFormValues
    )
  );

  return (
    <View className=" space-y-2 mb-4 pt-4 w-full">
      <FormFieldsRenderer
        fields={bookInclusionFormFields}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </View>
  );
}

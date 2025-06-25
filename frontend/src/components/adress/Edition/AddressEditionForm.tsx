import React, { useState } from "react";
import { View } from "react-native";
import { FormValues } from "../../../types/FormFieldType";
import { FormFieldsRenderer } from "../../form/FormFieldsRenderer";
import { editFormFields } from "./formFields";

type EditFormValues = FormValues<typeof editFormFields>;

export default function AddressEditionForm() {
  const [formValues, setFormValues] = useState<EditFormValues>(
    editFormFields.reduce(
      (acc, field) => ({ ...acc, [field.id]: field.value }),
      {} as EditFormValues
    )
  );

  return (
    <View className=" space-y-2 mb-4 pt-4 w-full">
      <FormFieldsRenderer
        fields={editFormFields}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </View>
  );
}

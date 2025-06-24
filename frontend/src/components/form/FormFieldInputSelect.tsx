import React, { useState } from "react";
import { View } from "react-native";
import { FormFieldType } from "../../types/FormFieldType";
import FormFieldInputSelectOptions from "./FormFieldInputSelectOptions";
import FormFieldInputSelectValue from "./FormFieldInputSelectValue";

interface Props {
  field: FormFieldType & { options: string[] };
  value: string;
  onChange: (value: string) => void;
}

export function FormFieldInputSelect({ field, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const onPressOption = (option: string, open: boolean) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <View className="w-full mt-2 mb-2">
      <FormFieldInputSelectValue
        label={field.label}
        value={value}
        placeholder={field.placeholder}
        onPress={() => setOpen(!open)}
      />
      {open && (
        <FormFieldInputSelectOptions
          options={field.options}
          onPress={onPressOption}
        />
      )}
    </View>
  );
}

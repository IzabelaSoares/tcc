import { FormFieldType, FormValues } from "../../types/FormFieldType";
import { FormFieldInput } from "./FormFieldInput";
import { FormFieldInputPassword } from "./FormFieldInputPassword";
import { FormFieldInputArea } from "./FormFieldInputArea";
import { FormFieldInputDate } from "./FormFieldInputDate";
import { FormFieldInputSelect } from "./FormFieldInputSelect";

interface props<T extends readonly FormFieldType[]> {
  fields: T;
  formValues: FormValues<T>;
  setFormValues: React.Dispatch<React.SetStateAction<FormValues<T>>>;
}

export function FormFieldsRenderer<T extends readonly FormFieldType[]>({
  fields,
  formValues,
  setFormValues,
}: props<T>) {
  return (
    <>
      {fields.map((field) => {
        const value = formValues[field.id as keyof FormValues<T>];
        const onChange = (text: string) =>
          setFormValues((prev) => ({ ...prev, [field.id]: text }));

        switch (field.type) {
          case "password":
            return (
              <FormFieldInputPassword
                key={field.id}
                field={field}
                value={value}
                onChange={onChange}
              />
            );
          case "area":
            return (
              <FormFieldInputArea
                key={field.id}
                field={field}
                value={value}
                onChange={onChange}
              />
            );
          case "date":
            return (
              <FormFieldInputDate
                key={field.id}
                field={field}
                value={value}
                onChange={onChange}
              />
            );
          case "select":
            return (
              <FormFieldInputSelect
                key={field.id}
                field={field as FormFieldType & { options: string[] }}
                value={value}
                onChange={(selected) =>
                  setFormValues((prev) => ({ ...prev, [field.id]: selected }))
                }
              />
            );
          default:
            return (
              <FormFieldInput
                key={field.id}
                field={field}
                value={value}
                onChange={onChange}
              />
            );
        }
      })}
    </>
  );
}

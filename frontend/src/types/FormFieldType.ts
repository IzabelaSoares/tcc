export type FormFieldType = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  [key: string]: any; // flexível para campos extras (ex: required, mask, etc)
};

export type FieldIdType<T extends readonly FormFieldType[]> = T[number]["id"];

export type FormValues<T extends readonly FormFieldType[]> = {
  [K in FieldIdType<T>]: string;
};

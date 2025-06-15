export type FormField = {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  [key: string]: any; // flexível para campos extras (ex: required, mask, etc)
};

export type FieldId<T extends readonly FormField[]> = T[number]["id"];

export type FormValues<T extends readonly FormField[]> = {
  [K in FieldId<T>]: string;
};

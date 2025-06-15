import { FormField } from "../../types/FormFieldType";

export const loginFormFields: FormField[] = [
  { 
    id: "email", 
    label: "E-mail", 
    value: "", 
    placeholder: "seuemail.com.br" 
  },
  {
    id: "senha",
    label: "Senha",
    value: "",
    placeholder: "******",
    type: "password",
  },
];

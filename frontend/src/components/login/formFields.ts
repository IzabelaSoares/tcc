import { FormFieldType } from "../../types/FormFieldType";

export const loginFormFields: FormFieldType[] = [
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

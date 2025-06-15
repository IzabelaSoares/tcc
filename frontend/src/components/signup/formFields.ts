import { FormField } from "../../types/FormFieldType";

export const cadastroFormFields: FormField[] = [
  {
    id: "nome",
    label: "Nome completo",
    value: "",
    placeholder: "Seu nome completo",
  },
  { id: "email", label: "E-mail", value: "", placeholder: "seuemail.com.br" },
  { id: "cpf", label: "CPF", value: "", placeholder: "000.000.000-00" },
  {
    id: "nascimento",
    label: "Data de nascimento",
    value: "",
    placeholder: "00/00/0000",
  },
  {
    id: "senha",
    label: "Senha",
    value: "",
    placeholder: "******",
    type: "password",
  },
  {
    id: "confirmarSenha",
    label: "Confirmar senha",
    value: "",
    placeholder: "******",
    type: "password",
  },
];

import { FormFieldType } from "../../../types/FormFieldType";

export const editFormFields: FormFieldType[] = [
  {
    id: "nome",
    label: "Nome completo",
    value: "",
    placeholder: "Seu nome completo",
  },
  {
    id: "titulo",
    label: "Título",
    placeholder: "Selecione uma opção",
    type: "select",
    options: ["Exploradora", "Iniciante"],
  },
  { id: "sobre", label: "Sobre", value: "", placeholder: "", type: "area" }
];

import { FormFieldType } from "../../../types/FormFieldType";

export const editFormFields: FormFieldType[] = [
  {
    id: "local",
    label: "Nome do local",
    value: "",
    placeholder: "Exemplo: Parque Nacional",
  },
  {
    id: "cep",
    label: "CEP",
    value: "",
    placeholder: "00000-000",
  },
  {
    id: "estado",
    label: "Estado",
    value: "",
    placeholder: "Exemplo: São Paulo",
  },
  {
    id: "cidade",
    label: "Cidade",
    value: "",
    placeholder: "Exemplo: Campinas",
  },
  {
    id: "bairro",
    label: "Bairro",
    value: "",
    placeholder: "Exemplo: Jardins",
  },
  {
    id: "rua",
    label: "Rua e numero",
    value: "",
    placeholder: "Exemplo: Rua das Flores, 123",
  },
];

import { FormFieldType } from "../../../types/FormFieldType";

export const bookInclusionFormFields: FormFieldType[] = [
  {
    id: "nome_livro",
    label: "Nome do livro",
    value: "",
    placeholder: "Exemplo: O Senhor dos Anéis",
  },
  {
    id: "capa",
    label: "Capa",
    value: "",
    placeholder: "Selecione uma imagem",
  },
  {
    id: "sinopse",
    label: "Sinopse",
    value: "",
    placeholder: "Descreva uma breve sinopse do livro",
  },
  {
    id: "idioma",
    label: "Idioma",
    value: "",
    placeholder: "",
  },
  {
    id: "autor",
    label: "Autor",
    value: "",
    placeholder: "J. R. R. Tolkien",
  },
  {
    id: "genero",
    label: "Gênero",
    value: "",
    placeholder: "Exemplo: Fantasia",
    type: "select",
    options: ["Aventura", "Romance", "Ficção Científica", "Fantasia", "Mistério", "Terror", "Drama", "Biografia", "História", "Autoajuda", "Religião", "Filosofia", "Poesia", "Infantil", "Juvenil"],
  },
];

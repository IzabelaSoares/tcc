import React, { useState } from "react";
import { View } from "react-native";
import TermsCheckbox from "./TermsCheckbox";
import { FormValues } from "../../types/FormFieldType";
import { FormFieldsRenderer } from "../form/FormFieldsRenderer";
import { cadastroFormFields } from "./formFields";
import SignUpButton from "./SignUpButton";
import useUsuario from "../../hooks/useUsuario";
import { UsuarioCreateRequestDTO } from "../../../dtos/usuario/UsuarioCreateRequest";

type CadastroFormValues = FormValues<typeof cadastroFormFields>;

export default function SignUpForm() {
  const { cadastrar } = useUsuario();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formValues, setFormValues] = useState<CadastroFormValues>(
    cadastroFormFields.reduce(
      (acc, field) => ({ ...acc, [field.id]: field.value }),
      {} as CadastroFormValues
    )
  );

  const onPress = () => {
    if (acceptedTerms) {
      let cadastro: UsuarioCreateRequestDTO = {
        nome: formValues.nome,
        email: formValues.email,
        senha: formValues.senha,
        cpf: formValues.cpf,
        dataNascimento: formValues.nascimento,
        aceitouTermo: true,
      };
      cadastrar(cadastro);
    } else {
      console.warn("Você precisa aceitar os termos para se cadastrar.");
    }
  };

  return (
    <View className=" space-y-2 mb-4 w-full max-w-[340px]">
      <FormFieldsRenderer
        fields={cadastroFormFields}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <TermsCheckbox
        setAcceptedTerms={setAcceptedTerms}
        acceptedTerms={acceptedTerms}
      />
      <SignUpButton onPress={onPress} />
    </View>
  );
}

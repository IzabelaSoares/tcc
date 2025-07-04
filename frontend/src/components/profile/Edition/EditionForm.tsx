import React, { useState } from "react";
import { View } from "react-native";
import { editFormFields } from "./formFields";
import { FormValues } from "../../../types/FormFieldType";
import { FormFieldsRenderer } from "../../form/FormFieldsRenderer";
import EditOptionsButton from "./EditOptionsButton";
import EditConfirmCancelButton from "./EditConfirmCancelButton";
import useUsuario from "../../../hooks/useUsuario";
import { UsuarioUpdateRequestDTO } from "../../../../dtos/usuario/UsuarioUpdateRequest";
import useProfile from "../../../screens/authenticated/Profile/useProfile";

type EditFormValues = FormValues<typeof editFormFields>;

interface props {
  onChangeEditing: (isEditing: boolean) => void;
}

export default function ProfileEditionForm({ onChangeEditing }: props) {
  const { atualizar } = useUsuario();
  const [formValues, setFormValues] = useState<EditFormValues>(
    editFormFields.reduce(
      (acc, field) => ({ ...acc, [field.id]: field.value }),
      {} as EditFormValues
    )
  );

  const onPressConfirm = () => {
    let atualizacao: UsuarioUpdateRequestDTO = {
      nome: formValues.nome,
      titulo: formValues.titulo,
      sobre: formValues.sobre
    }
    atualizar(atualizacao);
  };

  const onPressCancel = () => onChangeEditing(false);

  return (
    <View className=" space-y-2 mb-4 p-4 w-full">
      <FormFieldsRenderer
        fields={editFormFields}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <EditOptionsButton />
      <EditConfirmCancelButton
        onPressCancel={onPressCancel}
        onPressConfirm={onPressConfirm}
      />
    </View>
  );
}

import { View } from "react-native";
import {
  ProfileApresentation,
  ProfileAvatar,
  ProfileDropdown,
  ProfileEdition,
} from "../../../components/profile";
import useProfile from "./useProfile";
import useUsuario from "../../../hooks/useUsuario";
import { UsuarioProfileResponseDTO } from "../../../../dtos/usuario/UsuarioProfileResponse";
import { useEffect, useState } from "react";

export default function Profile() {
  const { buscarUsuario } = useUsuario();
  const [profile, setProfile] = useState<UsuarioProfileResponseDTO>();
  const { items, isEditing, setIsEditing } = useProfile();

  useEffect(() => {
    async function carregarDadosUsuario() {
      const usuario: UsuarioProfileResponseDTO = await buscarUsuario();
      setProfile(usuario);
    }

    carregarDadosUsuario();
  }, []);

  const ProfileContent = (profile: UsuarioProfileResponseDTO) =>
    isEditing ? (
      <ProfileEdition
        onChangeEditing={() => setIsEditing(false)}
        profile={profile}
      />
    ) : (
      <ProfileApresentation profile={profile}/>
    );

  return (
    <View className="flex-1 bg-primary pt-20">
      {profile && (
        <>
          <ProfileDropdown items={items} />
          <ProfileAvatar userName={profile.nome} />
          <ProfileContent {...profile} />
        </>
      )}
    </View>
  );
}

import React from "react";
import ProfileTitle from "../ProfileTitle";
import ProfileSubTitle from "../ProfileSubTitle";
import ProfileAboutCard from "../ProfileAboutCard";
import ProfileBottomSheet from "../ProfileBottomSheet";
import { UsuarioProfileResponseDTO } from "../../../../dtos/usuario/UsuarioProfileResponse";

interface props {
  profile: UsuarioProfileResponseDTO;
}

export default function ProfileApresentation({ profile }: props) {
  return (
    <>
      <ProfileTitle userName={profile.nome} />
      {profile.titulo && <ProfileSubTitle userTitle={profile.titulo} />}
      <ProfileAboutCard />
      <ProfileBottomSheet />
    </>
  );
}

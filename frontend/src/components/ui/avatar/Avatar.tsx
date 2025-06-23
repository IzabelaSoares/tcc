import React from "react";
import AvatarPicture from "./AvatarPicture";
import AvatarWithoutPicture from "./AvatarWithoutPicture";

interface props {
  name: string;
  imageUrl?: string;
  size?: number;
}

export default function Avatar({ name, imageUrl, size = 80 }: props) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const AvatarComponent = () =>
    imageUrl ? (
      <AvatarPicture imageUrl={imageUrl} size={size} />
    ) : (
      <AvatarWithoutPicture initials={initials} size={size} />
    );

  return <AvatarComponent />;
}

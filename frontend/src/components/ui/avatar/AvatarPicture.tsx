import { Image, Text, View } from "react-native";

interface props {
  imageUrl: string;
  size: number;
}

export default function AvatarPicture({ imageUrl, size }: props) {
  return (
    <Image
      source={{ uri: imageUrl }}
      className="rounded-full"
      style={{ width: size, height: size }}
    />
  );
}

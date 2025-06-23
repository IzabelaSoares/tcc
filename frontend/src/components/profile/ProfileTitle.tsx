import { Text } from "react-native";

interface props {
  userName: string;
}

export default function ProfileTitle({ userName }: props) {
  return (
    <Text
      className={`font-bold text-4xl leading-[49px] text-center text-white`}
    >
      {userName}
    </Text>
  );
}

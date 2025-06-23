import { Text } from "react-native";

interface props {
  userTitle: string;
}

export default function ProfileSubTitle({ userTitle }: props) {
  return (
    <Text
      className={`font-bold text-2xl leading-[49px] mb-4 text-center text-white`}
    >
      {userTitle}
    </Text>
  );
}

import { Text } from "react-native";

interface props {
  textColor: string;
}

export default function LogoTitle({ textColor }: props) {
  return (
    <Text
      className={`font-bold text-[32px] leading-[49px] mb-4 text-center ${textColor}`}
    >
      Like a Book
    </Text>
  );
}

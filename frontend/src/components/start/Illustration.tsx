import { Image } from "react-native";
import loginImage from "../../../assets/images/login.png";

export default function Illustration() {
  return (
    <Image
      source={loginImage}
      className="w-[260px] h-[300px] mb-8"
      resizeMode="contain"
    />
  );
}

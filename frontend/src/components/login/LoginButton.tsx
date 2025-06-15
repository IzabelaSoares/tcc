import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

export default function LoginButton() {
  const { login } = useAuth()

  return (
    <Button
      variant="secondary" 
      title="Entrar"
      className="w-full max-w-[340px] h-[56px] mb-6"
      onPress={login}
    />
  );
}

import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

export default function CreateAccountButton() {
  const { login } = useAuth();
  return (
    <Button
      variant="primary"
      title="Criar conta"
      className="w-full max-w-[340px] h-[56px] mb-6"
      onPressOut={login}
    />
  );
}

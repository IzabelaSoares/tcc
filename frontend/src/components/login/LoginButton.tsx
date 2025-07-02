import Button from "../ui/button/Button";

interface props {
  login: () => void;
}

export default function LoginButton({ login }: props) {

  return (
    <Button
      variant="secondary" 
      title="Entrar"
      className="w-full max-w-[340px] h-[56px] mb-6"
      onPress={login}
    />
  );
}

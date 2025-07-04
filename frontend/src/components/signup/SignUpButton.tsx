import Button from "../ui/button/Button";

interface props {
  onPress: () => void;
}

export default function SignUpButton({ onPress }: props) {
  return (
    <Button
      variant="secondary" 
      title="Cadastrar"
      className="w-full max-w-[340px] h-[56px] mb-6"
      onPress={onPress}
    />
  );
}

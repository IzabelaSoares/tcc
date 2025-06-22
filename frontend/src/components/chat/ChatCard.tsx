import { Card } from "../ui";
import { IconChat } from "../icon";

export default function ChatCard() {
  return (
    <Card className="w-[150px] h-[150px] rounded-[16px] bg-brown-600 justify-center items-center">
      <IconChat/>
    </Card>
  );
}

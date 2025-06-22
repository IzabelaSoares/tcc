import React from "react";
import { Card } from "../ui";
import { IconNotification } from "../icon";

export default function Notification() {
  return (
    <Card className="w-[150px] h-[150px] rounded-[16px] bg-primary-dark justify-center items-center">
      <IconNotification/>
    </Card>
  );
}

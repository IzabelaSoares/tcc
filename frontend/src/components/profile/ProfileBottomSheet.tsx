import { BottomSheet } from "../ui";
import ProfileRewards from "./ProfileRewards";

export default function ProfileBottomSheet() {
  return (
    <BottomSheet minHeight={0.4} minTranslateY={150}>
      <ProfileRewards />
    </BottomSheet>
  );
}

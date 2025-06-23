import { BottomSheet } from "../ui";
import ProfileRewardsText from "./ProfileRewardText";

export default function ProfileBottomSheet() {
  return (
    <BottomSheet minHeight={0.33} minTranslateY={150}>
      <ProfileRewardsText />
    </BottomSheet>
  );
}

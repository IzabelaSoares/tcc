import { BottomSheet } from "../ui";
import ProfileRewardsText from "./ProfileRewardText";
import ProfileRewards from "./ProfileRewards";

export default function ProfileBottomSheet() {
  return (
    <BottomSheet minHeight={0.33} minTranslateY={250}>
      <ProfileRewardsText />
      <ProfileRewards/>
    </BottomSheet>
  );
}

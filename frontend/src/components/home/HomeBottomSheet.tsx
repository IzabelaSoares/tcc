
import HomeContinueReadingBook from "./HomeContinueReadingBook";
import HomeCard from "./HomeCard";
import BottomSheet from "../ui/bottom-sheet/BottomSheet";

export default function HomeBottomSheet() {
  return (
    <BottomSheet minHeight={0.4} minTranslateY={150}>
      <HomeContinueReadingBook/>
      <HomeCard/>
    </BottomSheet>
  );
}

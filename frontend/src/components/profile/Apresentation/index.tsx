import React from "react";
import ProfileTitle from "../ProfileTitle";
import ProfileSubTitle from "../ProfileSubTitle";
import ProfileAboutCard from "../ProfileAboutCard";
import ProfileBottomSheet from "../ProfileBottomSheet";

export default function ProfileApresentation() {
  return (
    <>
      <ProfileTitle userName={"Izabela Soares"} />
      <ProfileSubTitle userTitle={"Exploradora"} />
      <ProfileAboutCard />
      <ProfileBottomSheet />
    </>
  );
}

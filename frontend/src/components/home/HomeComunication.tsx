import React from "react";
import { View } from "react-native";
import { NotificationCard } from "../notification";
import { ChatCard } from "../chat";
import { ContentCard, Illustration } from "../ui";
import bookbanner from "../../../assets/images/book-image-banner.png";

export default function HomeComunication() {
  return (
    <ContentCard>
      <Illustration source={bookbanner} className="w-full h-40 my-2 px-4" />
      <View className="flex-row justify-around">
        <NotificationCard />
        <ChatCard />
      </View>
    </ContentCard>
  );
}

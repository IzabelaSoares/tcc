import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface props {
  children: ReactNode;
}

export default function Card({ children }: props) {
  return (
    <View className="h-[120px] w-full rounded-[1rem] bg-white shadow p-4">
      {children}
    </View>
  );
}

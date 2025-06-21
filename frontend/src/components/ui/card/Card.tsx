import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface props {
  children: ReactNode;
}

export default function Card({ children }: props) {
  return (
    <View className="h-[120px] w-full rounded-[1rem] bg-primary-dark shadow p-4 mt-8 flex-row justify-between items-center">
      {children}
    </View>
  );
}

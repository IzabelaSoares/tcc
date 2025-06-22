import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface props {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: props) {
  return (
    <View className={className}>
      {children}
    </View>
  );
}

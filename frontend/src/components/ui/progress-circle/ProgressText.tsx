import React from 'react';
import { View, Text } from 'react-native';

interface props {
  percentage: number;
}

export default function ProgressText({ percentage }: props) {
  return (
    <View className="absolute">
      <Text className="text-white font-bold text-lg">{`${percentage}%`}</Text>
    </View>
  );
}

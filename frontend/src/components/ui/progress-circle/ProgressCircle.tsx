import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';
import Svg from 'react-native-svg';
import ProgressBackgroundCircle from './ProgressBackgroundCircle';
import ProgressAnimatedCircle from './ProgressAnimatedCircle';
import ProgressInnerFill from './ProgressInnerFill';
import ProgressText from './ProgressText';

interface props {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  fillColor?: string;
}

export default function ProgressCircle({
  percentage,
  size = 80,
  strokeWidth = 8,
  color = '#FFA500',
  backgroundColor = '#D3D3D3',
  fillColor = '#3A5A40',
}: props) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: percentage,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const strokeDashoffset = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0],
  });

  return (
    <View className="justify-center items-center">
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <ProgressBackgroundCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          backgroundColor={backgroundColor}
        />

        <ProgressAnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          color={color}
          circumference={circumference}
          strokeDashoffset={strokeDashoffset}
        />

        <ProgressInnerFill
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fillColor={fillColor}
        />
      </Svg>

      <ProgressText percentage={percentage} />
    </View>
  );
}

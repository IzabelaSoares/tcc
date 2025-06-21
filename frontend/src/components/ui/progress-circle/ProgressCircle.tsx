import React, { useEffect, useRef } from "react";
import { View, Text, Animated } from "react-native";
import Svg, { Circle } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface ProgressCircleProps {
  percentage: number; // Ex: 30 para 30%
  size?: number; // Tamanho externo do círculo
  strokeWidth?: number; // Espessura da borda
  color?: string; // Cor da parte preenchida
  backgroundColor?: string; // Cor do fundo
}

export default function ProgressCircle({
  percentage,
  size = 80,
  strokeWidth = 8,
  color = "#FFA500", // Laranja
  backgroundColor = "#D3D3D3", // Cinza claro
}: ProgressCircleProps) {
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
      <Svg
        color="#fff"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Fundo (círculo cinza) */}
        <Circle
          stroke={backgroundColor}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />

        {/* Progresso (círculo laranja) */}
        <AnimatedCircle
          stroke={color}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          originX={size / 2}
          originY={size / 2}
        />

        {/* Preenchimento interno (pra cobrir o fundo preto) */}
        <Circle
          fill="#3A5A40" // Aqui você coloca a cor do fundo do seu card (exemplo: bg-primary-dark ou qualquer outro)
          cx={size / 2}
          cy={size / 2}
          r={radius} // Um pouco menor pra caber dentro
        />
      </Svg>

      {/* Texto central */}
      <View className="absolute">
        <Text className="text-white font-bold text-lg">{`${percentage}%`}</Text>
      </View>
    </View>
  );
}

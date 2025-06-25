import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface props extends TouchableOpacityProps {
  title?: string;
  variant?: "primary" | "secondary" | "danger" | "default";
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
}

const variantStyles: Record<
  NonNullable<props["variant"]>,
  { container: string; text: string }
> = {
  primary: {
    container: "bg-green-700",
    text: "text-white text-xl",
  },
  secondary: {
    container: "bg-stone-100",
    text: "text-green-700 text-xl",
  },
  danger: {
    container: "bg-red-600",
    text: "text-white text-xl",
  },
  default: {
    container: "bg-white border-green-700 border-2",
    text: "text-green-700 text-xl",
  },
};

export default function Button({
  title,
  children,
  variant = "primary",
  className = "",
  textClassName,
  ...rest
}: props) {
  const { container, text } = variantStyles[variant];
  const textClass = textClassName ? textClassName : text;
  return (
    <TouchableOpacity
      className={`items-center justify-center rounded-lg px-4 py-3 ${container} ${className}`}
      {...rest}
    >
      {children ? (
        children
      ) : title ? (
        <Text className={`font-bold ${textClass}`}>
          {title}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
}

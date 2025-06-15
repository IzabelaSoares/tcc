import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  variant?: "primary" | "secondary" | "danger" | "default";
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
}

const variantStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  { container: string; text: string }
> = {
  primary: {
    container: "bg-green-700",
    text: "text-white",
  },
  secondary: {
    container: "bg-stone-100",
    text: "text-green-700",
  },
  danger: {
    container: "bg-red-600",
    text: "text-white",
  },
  default: {
    container: "bg-gray-500",
    text: "text-white",
  },
};

const Button: React.FC<ButtonProps> = ({
  title,
  children,
  variant = "primary",
  className = "",
  textClassName = "",
  ...rest
}) => {
  const { container, text } = variantStyles[variant];

  return (
    <TouchableOpacity
      className={`items-center justify-center rounded-lg px-4 py-3 ${container} ${className}`}
      {...rest}
    >
      {children ? (
        children
      ) : title ? (
        <Text className={`font-bold text-xl ${text} ${textClassName}`}>
          {title}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;

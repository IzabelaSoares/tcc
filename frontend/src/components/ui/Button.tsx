import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  children,
  className = '',
  textClassName = '',
  ...rest
}) => {
  return (
    <TouchableOpacity
      className={`items-center justify-center bg-green-700 rounded-lg px-4 py-3 ${className}`}
      {...rest}
    >
      {children ? (
        children
      ) : title ? (
        <Text className={`text-white font-semibold ${textClassName}`}>
          {title}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default Button;

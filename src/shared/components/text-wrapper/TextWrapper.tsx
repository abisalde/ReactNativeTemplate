/** CORE */
import React from "react";
import RNText, { IRNTextProps } from "@freakycoder/react-native-custom-text";
import fonts from "@fonts";
/**
 * ? Local Imports
 */

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.dmsans.regular,
  color = "#757575",
  children,
  ...rest
}) => {
  return (
    <RNText fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </RNText>
  );
};

export default TextWrapper;

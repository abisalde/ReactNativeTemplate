/** CORE */
import * as React from "react";
import { TextProps, GestureResponderEvent, TextStyle } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Foundation from "react-native-vector-icons/Foundation";
import Fontisto from "react-native-vector-icons/Fontisto";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Zocial from "react-native-vector-icons/Zocial";

/** INSTRUMENTS */
export const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
};

export type IconType =
  | "FontAwesome"
  | "AntDesign"
  | "MaterialIcons"
  | "EvilIcons"
  | "Entypo"
  | "Foundation"
  | "Ionicons"
  | "MaterialCommunityIcons"
  | "Zocial"
  | "Octicons"
  | "SimpleLineIcons"
  | "Fontisto"
  | "Feather"
  | "FontAwesome5";

export interface IconPropsBase extends TextProps {
  type: string;
  name: string;
  size?: number;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: TextStyle;
}

interface AntDesignProps extends IconPropsBase {
  type: "AntDesign";
}
interface MaterialIconsProps extends IconPropsBase {
  type: "MaterialIcons";
}
interface EvilIconsProps extends IconPropsBase {
  type: "EvilIcons";
}
interface EntypoProps extends IconPropsBase {
  type: "Entypo";
}
interface FontAwesomeProps extends IconPropsBase {
  type: "FontAwesome";
}
interface FoundationProps extends IconPropsBase {
  type: "Foundation";
}
interface IoniconsProps extends IconPropsBase {
  type: "Ionicons";
}
interface MaterialCommunityIconsProps extends IconPropsBase {
  type: "MaterialCommunityIcons";
}
interface ZocialProps extends IconPropsBase {
  type: "Zocial";
}
interface OcticonsProps extends IconPropsBase {
  type: "Octicons";
}
interface SimpleLineIconsProps extends IconPropsBase {
  type: "SimpleLineIcons";
}
interface FontistoProps extends IconPropsBase {
  type: "Fontisto";
}
interface FeatherProps extends IconPropsBase {
  type: "Feather";
}

interface FontAwesome5Props extends IconPropsBase {
  type: "FontAwesome5";
  brand?: boolean;
  solid?: boolean;
}

type IconProps =
  | AntDesignProps
  | MaterialIconsProps
  | EvilIconsProps
  | EntypoProps
  | FontAwesomeProps
  | FoundationProps
  | IoniconsProps
  | MaterialCommunityIconsProps
  | ZocialProps
  | OcticonsProps
  | SimpleLineIconsProps
  | FontistoProps
  | FeatherProps
  | FontAwesome5Props;

const Icon = (props: IconProps) => {
  const { name, color, size, onPress, style, ...textProps } = props;

  switch (props.type) {
    case "AntDesign": {
      return (
        <AntDesign
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Entypo": {
      return (
        <Entypo
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Ionicons": {
      return (
        <Ionicons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "SimpleLineIcons": {
      return (
        <SimpleLineIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "EvilIcons": {
      return (
        <EvilIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "MaterialIcons": {
      return (
        <MaterialIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "FontAwesome": {
      return (
        <FontAwesome
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "FontAwesome5": {
      const { brand, solid } = props;
      return (
        <FontAwesome5
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
          brand={brand}
          solid={solid}
        />
      );
    }
    case "Foundation": {
      return (
        <Foundation
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "MaterialCommunityIcons": {
      return (
        <MaterialCommunityIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Zocial": {
      return (
        <Zocial
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Octicons": {
      return (
        <Octicons
          {...textProps}
          name={name}
          style={style}
          color={color}
          size={size ? size : 18}
          onPress={onPress}
        />
      );
    }
    case "Fontisto": {
      return (
        <Fontisto
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    case "Feather": {
      return (
        <Feather
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
    default: {
      return (
        <MaterialIcons
          {...textProps}
          name={name}
          size={size}
          style={style}
          color={color}
          onPress={onPress}
        />
      );
    }
  }
};

Icon.defaultProps = {
  size: 20,
  style: {},
  onPress: null,
  color: "#757575",
};

export default Icon;

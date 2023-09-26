/** CORE */

import { DefaultTheme, ExtendedTheme } from "@react-navigation/native";
import { Platform } from "react-native";
import {
  configureFonts,
  MD3LightTheme as PaperTheme,
} from "react-native-paper";

/**
 * ? Local & Shared Imports
 */
import { COLORS } from "@shared-constants/colors";
import fonts from "@fonts";

export const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...COLORS,
  },
};

export const DarkTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    primary: COLORS.primary,
  },
};

const fontConfig = {
  [fonts.dmsans.black]: {
    fontFamily: Platform.select({
      ios: "System",
      default: fonts.dmsans.medium,
    }),
    fontWeight: "400",
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
  },
};

export const PaperLightTheme = {
  ...PaperTheme,
  colors: {
    ...PaperTheme.colors,
    ...COLORS,
  },
  fonts: configureFonts({ config: fontConfig }),
};

/** CORE */

import { ExtendedTheme } from "@react-navigation/native";
import { scaledPixel } from "@utils/normalize";
import { Platform, StyleSheet, ViewStyle } from "react-native";

interface Style {
  root: ViewStyle;
  noInternet: ViewStyle;
  overlay: ViewStyle;
  versioning: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    root: {
      backgroundColor: colors.background,
      flex: 1,
    },
    noInternet: {
      paddingVertical: scaledPixel(15),
      backgroundColor: colors.secondary,
      alignItems: "center",
      justifyContent: "center",
    },
    overlay: {
      flex: 1,
      ...StyleSheet.absoluteFillObject,
      opacity: 1,
    },
    versioning: {
      position: "absolute",
      bottom: Platform.OS === "ios" ? 12 : 2,
      left: Platform.OS === "ios" ? 17 : 2,
    },
  });
};

/** CORE **/

import * as React from "react";
import {
  View,
  StatusBar,
  StyleProp,
  ViewStyle,
  StatusBarProps,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNetInfo } from "@react-native-community/netinfo";
import { useTheme } from "@react-navigation/native";

/**
 *
 *
 * ? Local & Shared Imports
 */
import createStyles from "./ScreensProvider.styles";

import { Text } from "@shared-components/text-wrapper";
import Icon from "@shared-constants/icons";
import fonts from "@fonts";

const SCREEN_HEIGHT = Dimensions.get("window").height;

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface IScreensProviderProps {
  children: React.ReactNode;
  style?: CustomStyleProp;
  backgroundColor?: Pick<
    StatusBarProps,
    "barStyle" | "hidden" | "translucent" | "animated"
  >;
}

const ScreensProvider: React.FC<IScreensProviderProps & StatusBarProps> = ({
  backgroundColor = "transparent",
  children,
  style,
  ...props
}) => {
  const netInfo = useNetInfo();
  const theme = useTheme();
  const { colors } = theme;
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={[styles.root, style, { height: SCREEN_HEIGHT }]}>
      <StatusBar
        {...props}
        translucent={true}
        backgroundColor={backgroundColor}
      />
      {netInfo.type !== "unknown" && netInfo.isInternetReachable === false ? (
        <View style={styles.noInternet}>
          <Text h5 bold color={colors.white} fontFamily={fonts.dmsans.medium}>
            <Icon
              type="Feather"
              name="cloud-off"
              color={colors.white}
              size={18}
            />{" "}
            {"  "}No Internet Connection
          </Text>
        </View>
      ) : null}
      {children}
    </SafeAreaView>
  );
};

export default ScreensProvider;

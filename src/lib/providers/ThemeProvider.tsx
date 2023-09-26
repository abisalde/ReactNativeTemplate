/** CORE **/
import * as React from "react";
import { PaperProvider } from "react-native-paper";

/**
 *
 * ? Local & Shared Imports/ Instrumentals
 */
import { PaperLightTheme } from "@app-theme";

export const ThemeProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  return <PaperProvider theme={PaperLightTheme}>{children}</PaperProvider>;
};

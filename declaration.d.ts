/** INSTRUMENTS */
import { theme } from "./src/shared/theme";

declare module "@react-navigation/native" {
  export type ExtendedTheme = typeof theme;
  export function useTheme(): ExtendedTheme;
}

/** CORE **/
import * as React from "react";
import { StatusBar, View, useColorScheme } from "react-native";
import { enableScreens } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";

/**
 *
 * ? Local & Shared Imports
 */
import { Text } from "@shared-components/text-wrapper";

import { DarkTheme, LightTheme } from "@app-theme";
import { ThemeProvider } from "@lib/providers";

import { RootStackParamList } from "./type";
import Icon from "@shared-constants/icons";

enableScreens();

const Stack = createNativeStackNavigator();

interface RefObject<T> {
  current: T | null;
}

const SplashScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text h1 bold center>
      Welcome Home
    </Text>
  </View>
);

const AppStack = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text h1 center>
      React Native Setup Complete{" "}
      <Icon type="AntDesign" name="home" size={40} color="black" />
    </Text>
  </View>
);

const SplashStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SPLASH" component={SplashScreen} />
    </Stack.Navigator>
  );
};

const Navigation: React.FC = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  const isReady: RefObject<boolean> = React.createRef<boolean>();
  const navigationRef = createNavigationContainerRef<RootStackParamList>();

  const [appLoading, updateAppLoading] = React.useState<boolean>(true);

  React.useEffect((): any => {
    return () => (isReady.current = false);
  }, [isReady]);

  React.useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    const timer = setTimeout(() => {
      updateAppLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isDarkMode]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReady.current = true;
          }}
          theme={isDarkMode ? DarkTheme : LightTheme}>
          {appLoading ? <SplashStack /> : <AppStack />}
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default Navigation;

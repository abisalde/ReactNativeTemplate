/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

/** CORE **/
import "./ignoreWarnings";
import * as React from "react";
import { Platform, StatusBar } from "react-native";
import Toast from "react-native-toast-message";

/** INSTRUMENTALS */
import Navigation from "@app-navigation";

function App(): JSX.Element {
  const isAndroid = Platform.OS === "android";

  React.useEffect(() => {
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
  }, [isAndroid]);

  return (
    <>
      <Navigation />
      <Toast />
    </>
  );
}

export default App;

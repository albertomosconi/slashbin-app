import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import * as expo from "expo-status-bar";

import colors from "./app/config/colors";
import { AppProvider } from "./app/other/AppContext";
import CameraScreen from "./app/screens/CameraScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("./app/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Bold": require("./app/assets/fonts/Rubik-Bold.ttf"),
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <expo.StatusBar style="light" />
        <CameraScreen />
      </SafeAreaView>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

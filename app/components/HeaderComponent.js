import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

export default function HeaderComponent() {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>./bin</Text>
      </View>
      <TouchableOpacity style={styles.info}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    top: StatusBar.currentHeight,
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "Rubik-Bold",
    color: colors.white,
    textShadowColor: colors.black,
    textShadowRadius: 20,
  },
  info: {
    width: 30,
    height: 30,
    backgroundColor: "red",
  },
});

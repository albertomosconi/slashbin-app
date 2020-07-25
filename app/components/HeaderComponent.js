import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../config/colors";

export default function HeaderComponent() {
  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>./bin</Text>
      </View>
      <TouchableOpacity onPress={() => alert("Hello")}>
        <Entypo
          name="info"
          size={30}
          color={colors.white}
          style={styles.info}
        />
      </TouchableOpacity>
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
    paddingVertical: 10,
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
    textShadowRadius: 20,
    textShadowColor: colors.black,
  },
});

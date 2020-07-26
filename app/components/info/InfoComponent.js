import React, { useRef, useEffect, useContext } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Easing,
  TouchableOpacity,
} from "react-native";

import { AppContext } from "../context/AppContext";
import colors from "../../config/colors";

export default InfoComponent = () => {
  const infoAnim = useRef(new Animated.Value(Dimensions.get("screen").width))
    .current;

  const { info, setInfo } = useContext(AppContext);

  useEffect(() => {
    if (!info) {
      Animated.timing(infoAnim, {
        toValue: Dimensions.get("screen").width,
        easing: Easing.bounce,
        duration: 800,
      }).start();
    } else {
      Animated.timing(infoAnim, {
        toValue: 0,
        easing: Easing.bounce,
        duration: 800,
      }).start();
    }
  }, [info]);

  return (
    <Animated.View style={{ ...styles.container, marginLeft: infoAnim }}>
      <Text>info</Text>
      <TouchableOpacity onPress={() => setInfo(0)} style={styles.button}>
        <Text>Home</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: colors.secondary,
    zIndex: 100,
  },
  button: {
    textAlignVertical: "center",
    flex: 1,
  },
});

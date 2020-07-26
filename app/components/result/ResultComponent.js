import React, { useRef, useContext } from "react";
import {
  StyleSheet,
  Animated,
  Easing,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import colors from "../../config/colors";
import { AppContext } from "../context/AppContext";

export default ResultComponent = () => {
  const { result, setResult } = useContext(AppContext);

  const slideAnim = useRef(
    new Animated.Value(Dimensions.get("screen").height - 100)
  ).current;

  const handlePress = () => {
    if (!result) {
      setResult(1);
      Animated.timing(slideAnim, {
        toValue: Dimensions.get("screen").height * 0.15,
        easing: Easing.bounce,
        duration: 700,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: Dimensions.get("screen").height - 100,
        easing: Easing.bounce,
        duration: 350,
      }).start();
      setResult(0);
    }
  };

  return (
    <Animated.View style={{ ...styles.result, top: slideAnim }}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          {result ? "riprova" : "scansiona"}
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aperiam
          eos repellat repellendus quos dolorum amet laudantium ex quisquam?
          Alias?
        </Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: -30,
    height: 50,
    width: "40%",
    borderRadius: 25,
    elevation: 6,
    backgroundColor: colors.primary,
    zIndex: 2,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "Rubik-Bold",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 50,
    zIndex: 2,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  result: {
    position: "absolute",
    alignItems: "center",
    height: Dimensions.get("screen").height * 0.85,
    width: "100%",
    paddingTop: 30,
  },
});

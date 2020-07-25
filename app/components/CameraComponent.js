import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Camera } from "expo-camera";
import { AppContext } from "./context/AppContext";

export default function CameraComponent() {
  const { camera, setCamera } = useContext(AppContext);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Accesso alla fotocamera negato</Text>;
  }

  return (
    <Camera style={styles.camera} ratio="18:9" ref={(cam) => setCamera(cam)} />
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    zIndex: -1,
  },
});

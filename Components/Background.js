import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/img/Logo.jpg")} // Ruta de la imagen
      style={styles.background}
    >
      <View style={styles.overlay} /> {/* Para oscurecer la imagen si es necesario */}
      <View style={styles.content}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Efecto de oscurecimiento opcional
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default Background;

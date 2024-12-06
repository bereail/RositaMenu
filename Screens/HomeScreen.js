import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={styles.buttonText}>Go to Stack Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: 20,
    width: "50%",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
});

export default HomeScreen;

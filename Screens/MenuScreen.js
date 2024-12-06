import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderInfo from "../Components/HeaderInfo"; // Importa HeaderInfo

const MenuScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Componente HeaderInfo con logo, dirección e Instagram */}
      <HeaderInfo />

      {/* Título del menú */}
      <Text style={styles.title}>Menú</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RositaComidas")}
      >
        <Text style={styles.buttonText}>Para Comer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RositaBebidas")}
      >
        <Text style={styles.buttonText}>Para Tomar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b2b2b",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#d4a5b0",
    padding: 15,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    fontWeight: "600",
  },
});

export default MenuScreen;

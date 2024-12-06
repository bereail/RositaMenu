import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderInfo from "../Components/HeaderInfo";

const MenuScreen = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const buttonWidth = Platform.OS === "web" ? width * 0.4 : width * 0.7;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <HeaderInfo />

      {/* Title */}
      <Text style={styles.title}>Menú</Text>

      {/* Buttons */}
      <TouchableOpacity
  style={[styles.button, { width: buttonWidth }]}
  onPress={() => navigation.navigate("RositaComidas", { screen: "Comidas" })} // Navega a Comidas
>
  <View style={styles.buttonContent}>
    <MaterialCommunityIcons name="food" color="white" size={30} />
    <Text style={styles.buttonText}>Para Comer</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={[styles.button, { width: buttonWidth }]}
  onPress={() => navigation.navigate("RositaComidas", { screen: "Bebidas" })} // Navega a Bebidas
>
  <View style={styles.buttonContent}>
    <MaterialCommunityIcons name="glass-cocktail" color="white" size={30} />
    <Text style={styles.buttonText}>Para Tomar</Text>
  </View>
</TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d4a5b0",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default MenuScreen;

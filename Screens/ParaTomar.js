import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import HeaderInfo from "../Components/HeaderInfo";
import MenuDataBebidas from "./Menu/MenuData/MenuDataBebidas";
import MenuItem from "./Menu/MenuItem/MenuItem";

const ParaTomar = () => {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <HeaderInfo />

      {/* Contenido desplazable */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {MenuDataBebidas.map((category) => (
          <View key={category.category}>
            <Text style={styles.title}>{category.category}</Text>
            {category.items.map((item) => (
              <MenuItem key={item.id} name={item.name} price={item.price} />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4a5b0",
  },
  scrollView: {
    flexGrow: 1, // Asegura que el ScrollView ocupe todo el espacio disponible
  },
  scrollViewContent: {
    paddingBottom: 20, // Espacio inferior opcional
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
});

export default ParaTomar;

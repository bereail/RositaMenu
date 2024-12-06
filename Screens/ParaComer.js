import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import HeaderInfo from "../Components/HeaderInfo";
import MenuDataComidas from "./Menu/MenuData/MenuDataComidas";
import MenuItem from "./Menu/MenuItem/MenuItem";

const ParaComer = () => {
  return (
    <View style={styles.container}>
        {/* Componente HeaderInfo con logo, dirección e Instagram */}
      <HeaderInfo />

      {/* Contenido desplazable */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        {MenuDataComidas.map((category) => (
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
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
});
export default ParaComer;

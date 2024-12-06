import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import HeaderInfo from "../Components/HeaderInfo";

const comidaItems = [
  { id: "1", name: "Hamburguesa Gourmet", price: "$12" },
  { id: "2", name: "Nachos con Queso", price: "$7" },
  { id: "3", name: "Pizza Margarita", price: "$10" },
];

const ParaComer = () => {
  return (
    <View style={styles.container}>
        {/* Componente HeaderInfo con logo, dirección e Instagram */}
      <HeaderInfo />

        {/* Título */}
      <Text style={styles.title}>Para Comer</Text>

      <FlatList
        data={comidaItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});

export default ParaComer;

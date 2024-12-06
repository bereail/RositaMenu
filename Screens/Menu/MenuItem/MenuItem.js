import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MenuItem = ({ name, price }) => (
  <>
    <View style={styles.item}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}>${price}</Text>
    </View>
    <View style={styles.separator} />
  </>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  itemName: {
    color: "black",
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  separator: {
    borderBottomWidth: 1, // Línea delgada
    borderColor: "#ccc", // Color gris claro
    marginVertical: 8, // Separación arriba y abajo
    opacity: 0.5, // Hacerla más tenue
  },
});

export default MenuItem;

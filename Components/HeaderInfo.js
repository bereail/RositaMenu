import React from "react";
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Para el ícono de ubicación
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Para el ícono de Instagram

const HeaderInfo = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/img/Logo.jpg")} // Ruta de tu logo
        style={styles.logo}
        resizeMode="contain"
      />
      
      {/* Dirección con ícono de ubicación */}
      <View style={styles.addressContainer}>
        <MaterialCommunityIcons name="map-marker" color="#333" size={20} />
        <Text style={styles.address}>Callao 1195, Rosario</Text>
      </View>

      {/* Instagram con ícono */}
      <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/rositalodescorcha")}>
        <View style={styles.instagramContainer}>
          <FontAwesome name="instagram" color="#000000" size={20} />
          <Text style={styles.instagram}>/rositalodescorcha</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginBottom: 20, // Espacio entre el header y el título
    },
    logo: {
      width: 500, // Aumenta el ancho del logo
      height: 150, // Aumenta la altura del logo
      marginBottom: 10,
    },
    addressContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
    },
    address: {
      fontSize: 16,
      color: "#333",
      marginLeft: 10,
    },
    instagramContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
    },
    instagram: {
      fontSize: 16,
      color: "#3b5998", // Color azul de Instagram
      textDecorationLine: "underline",
      marginLeft: 10,
    },
  });
  

export default HeaderInfo;

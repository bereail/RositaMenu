import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Para el ícono de ubicación
import FontAwesome from "react-native-vector-icons/FontAwesome"; // Para el ícono de Instagram

const { width} = Dimensions.get("window"); // Obtenemos el tamaño de la pantalla

const HeaderInfo = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/img/Logo.png")} // Ruta de tu logo
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Dirección con ícono de ubicación */}
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(
            "https://www.google.com/maps/@-32.9475624,-60.6613917,3a,75y,86.23h,87.96t/data=!3m7!1e1!3m5!1sI7AnEXVsk3g80W6QyzCHZg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D2.0372146538185376%26panoid%3DI7AnEXVsk3g80W6QyzCHZg%26yaw%3D86.23379093935569!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D"
          )
        }
      >
        <View style={styles.addressContainer}>
          <MaterialCommunityIcons name="map-marker" color="#333" size={20} />
          <Text style={styles.address}>Callao 1195, Rosario</Text>
        </View>
      </TouchableOpacity>

      {/* Instagram con ícono */}
      <TouchableOpacity
        onPress={() =>
          Linking.openURL("https://www.instagram.com/rositalodescorcha")
        }
      >
        <View style={styles.instagramContainer}>
          <FontAwesome name="instagram" color="#000000" size={20} />
          <Text style={styles.instagram}>/Rositalodescorcha</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  logo: {
    width: Platform.OS === "web" ? width * 0.4 : width * 0.7, // Más grande en la web
    height: Platform.OS === "web" ? width * 0.16 : width * 0.3, // Proporcional al ancho
    marginBottom: 10,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  address: {
    fontSize: Platform.OS === "web" ? 18 : width * 0.04, // Tamaño menor en web
    color: "#333",
    marginLeft: 10,
  },
  instagramContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  instagram: {
    fontSize: Platform.OS === "web" ? 18 : width * 0.04, // Tamaño menor en web
    marginLeft: 10,
  },
});

export default HeaderInfo;

import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions, Platform } from "react-native";
import HeaderInfo from "../Components/HeaderInfo";
import MenuDataComidas from "./Menu/MenuData/MenuDataComidas";
import MenuItem from "./Menu/MenuItem/MenuItem";

const ParaComer = () => {
  // Obtener las dimensiones de la pantalla
  const { width, height } = Dimensions.get("window");

  // Verificar si estamos en la web
  const isWeb = Platform.OS === "web";

  // Factor para escalar elementos en la web (más grande que en móviles)
  const webScaleFactor = isWeb ? 1.2 : 1;

  // Calculamos dinámicamente el tamaño de la fuente, limitado entre 16px y 45px
  const dynamicFontSize = Math.min(Math.max(width * 0.05 * webScaleFactor, 16), 45);

  // Calculamos dinámicamente el margen inferior de las categorías, limitado entre 10px y 30px
  const dynamicMargin = Math.min(Math.max(height * 0.02 * webScaleFactor, 10), 30);

  return (
    <View style={styles.container}>
      {/* Componente desplazable */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollViewContent,
          {
            // Añadimos padding horizontal para separar el contenido de los bordes
            paddingHorizontal: Math.min(width * 0.05 * webScaleFactor, 60),
          },
        ]}
      >
        {/* Encabezado del menú */}
        <HeaderInfo style={{ marginBottom: dynamicMargin }} />

        {/* Renderizamos las categorías del menú */}
        {MenuDataComidas.map((category) => (
          <View key={category.category} style={{ marginBottom: dynamicMargin }}>
            {/* Título de la categoría con tamaño de fuente dinámico */}
            <Text style={[styles.title, { fontSize: dynamicFontSize }]}>
              {category.category}
            </Text>
            {/* Renderizamos los ítems de cada categoría */}
            {category.items.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la altura disponible
    backgroundColor: "#d4a5b0", // Color de fondo general
  },
  scrollView: {
    flexGrow: 1, // Permite que el ScrollView crezca y ocupe espacio
  },
  scrollViewContent: {
    paddingBottom: 20, // Espacio extra en la parte inferior del contenido
  },
  title: {
    color: "#4A4A4A", // Color de texto del título
    fontWeight: "bold", // Texto en negrita
    textAlign: "center", // Centrado
  },
});

export default ParaComer;

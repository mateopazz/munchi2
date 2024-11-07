import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const RecetaPasoAPaso = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Imagen de la receta */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/300' }} // Usa una URL de imagen real
          style={styles.image}
        />
        <Text style={styles.imageText}>imagen de la receta</Text>
      </View>

      {/* Nombre de la receta */}
      <Text style={styles.recipeName}>Nombre receta</Text>

      {/* Pasos de la receta */}
      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Paso 1:</Text>
        <Text style={styles.stepDescription}>explicación...</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Paso 2:</Text>

        <Text style={styles.stepDescription}>explicación...</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Paso 3:</Text>
        <Text style={styles.stepDescription}>explicación...</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1c572',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 150,
    backgroundColor: '#ccc',
  },
  imageText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -10 }],
    color: '#000',
    fontSize: 16,
  },
  recipeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#af761c',
    textAlign: 'center',
    marginBottom: 20,
  },
  stepContainer: {
    marginBottom: 15,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#af761c', // Color de la estrella
  },
  stepDescription: {
    fontSize: 16,
    color: '#af761c',
    marginLeft: 10,
  },
});

export default RecetaPasoAPaso;

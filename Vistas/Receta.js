import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const RecetaScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagen de la receta */}
      <View style={styles.imageContainer}>
        <Text style={styles.imagePlaceholder}>imagen de la receta</Text>
      </View>

      {/* Nombre de la receta */}
      <Text style={styles.recipeName}>Nombre receta</Text>

      {/* Ingredientes */}
      <View style={styles.ingredientsContainer}>
        <Text style={styles.ingredientsTitle}>Ingredientes:</Text>
        <View style={styles.ingredientColumn}>
          <Text style={styles.ingredient}>• Mayonesa</Text>
          <Text style={styles.ingredient}>• Aceituna</Text>
          <Text style={styles.ingredient}>• Leche</Text>
          <Text style={styles.ingredient}>• Azúcar</Text>
        </View>
        <View style={styles.ingredientColumn}>
          <Text style={styles.ingredient}>• Mayonesa</Text>
          <Text style={styles.ingredient}>• Aceituna</Text>
          <Text style={styles.ingredient}>• Leche</Text>
          <Text style={styles.ingredient}>• Azúcar</Text>
        </View>
      </View>

      {/* Botón para ver receta paso a paso */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>¡Mira la receta paso a paso!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e1c572',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePlaceholder: {
    color: '#808080',
  },
  recipeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#af761c',
  },
  ingredientsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ingredientsTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#af761c',
  },
  ingredientColumn: {
    marginRight: 20,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 5,
    color: '#af761c',
  },
  button: {
    backgroundColor: '#5d9d61',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#e6e1c3',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RecetaScreen;
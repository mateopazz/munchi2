import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const recipes = [
  { id: '1', name: 'Receta 1' },
  { id: '2', name: 'Receta 2' },
  { id: '3', name: 'Receta 3' },
];

const SimpleRecipeScreen = () => {
  const showAlert = (message) => {
    Alert.alert(message); // Muestra una alerta con el mensaje
  };

  const renderItem = ({ item }) => (
    <View style={styles.recipeItem}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.recipeName}>{item.name}</Text>
      <TouchableOpacity><Ionicons name="star" size={24} color="yellow"/></TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        {/* Botón cerrar */}
        <TouchableOpacity onPress={() => showAlert('Cerrar presionado')}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>

        {/* Barra de búsqueda */}
        <TextInput 
          style={styles.searchBar} 
          placeholder="Buscar receta" 
          placeholderTextColor="#ccc" 
        />

        {/* Botón de perfil */}
        <TouchableOpacity onPress={() => showAlert('Perfil presionado')}>
          <Ionicons name="person" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Lista de recetas */}
      <FlatList
        data={recipes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

// Estilos básicos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1c572',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#af761c',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 40,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  recipeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#5d9d61',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginRight: 10,
  },
  recipeName: {
    flex: 1,
    fontSize: 16,
    color: '#e6e1c3',
  },
});

export default SimpleRecipeScreen;

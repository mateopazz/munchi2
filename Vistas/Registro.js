import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default function Registro({navigation}) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para enviar los datos del formulario
  const handleSubmit = async () => {
    if (!nombre || !password || !email) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    try {
      const response = await fetch('http://10.0.1.236:3000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombre,
          password: password,
          email: email,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        Alert.alert('Éxito', 'Usuario creado exitosamente');
        // limpiar los campos del formulario 
        setNombre('');
        setPassword('');
        setEmail('');
      } else {
        Alert.alert('Error', 'No se pudo crear el usuario');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al conectar con el servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity title="Ingreso" style={styles.boton} onPress={handleSubmit}>
        <Text style={{textAlign:'center', color: 'white'}}>Botón</Text>  
      </TouchableOpacity> 
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.registerText}>
          Ya tenes una cuenta? Inicia sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e1c572',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  boton:{
    
    width: 200,
    padding: 15,
    marginBottom: 20,
    borderRadius: 50,
    
    backgroundColor: '#af761c',
    
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'none',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Escribe algo </Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        onChangeText={(input) => setText(input)}
        value={text}
      />
      <Text style={styles.output}>Texto ingresado: {text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  output: {
    fontSize: 18,
    color: 'black',
  },
});

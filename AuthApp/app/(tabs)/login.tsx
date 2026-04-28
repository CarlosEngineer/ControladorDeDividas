import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>

      <View style={{ marginBottom: 25 }}>
        <Text style={styles.title}>LOGIN</Text>
      </View>

      <View>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          secureTextEntry
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => alert('Login realizado com sucesso!')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => alert('Redirecionando para cadastro...')}
        >
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40,
    marginVertical: 120,
    padding: 20,
    borderRadius: 15,

    // 🔥 Fundo metálico
    backgroundColor: '#2c2f33',

    // 🔥 Sombra estilo metal
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e0e0e0',
    letterSpacing: 2
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    color: '#ccc',
  },

  input: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    width: 260,

    // 🔥 efeito "metal claro"
    backgroundColor: '#3a3f44',
    color: '#fff',

    // leve brilho
    shadowColor: '#fff',
    shadowOffset: { width: -1, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  buttonPrimary: {
    padding: 12,
    borderRadius: 8,
    marginTop: 10,

    // 🔥 azul metálico
    backgroundColor: '#4a90e2',

    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonSecondary: {
    padding: 12,
    borderRadius: 8,
    marginTop: 10,

    // 🔥 cinza metálico
    backgroundColor: '#6c757d',

    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1
  }
})
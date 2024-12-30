import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Section with Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoBackground}>
          <Image source={require('../assets/orig_logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.tagline}>Brewing Happiness, One Cup at a Time</Text>
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#6D4C41" />
        <TextInput placeholder="Password" style={styles.input} placeholderTextColor="#6D4C41" secureTextEntry />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Menu')} // Navigate to MenuScreen
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text style={styles.createAccountText}>
            Don't have an account? <Text style={styles.linkText}>Create one!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

// Add your styles here
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#D7CCC8', justifyContent: 'center', padding: 20 },
  logoContainer: { alignItems: 'center', marginBottom: 20 },
  logoBackground: { backgroundColor: '#A1887F', padding: 20, borderRadius: 100 },
  logo: { width: 100, height: 100 },
  tagline: { fontSize: 16, color: '#5D4037', fontStyle: 'italic', marginTop: 10 },
  formContainer: { marginTop: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#4E342E' },
  input: { backgroundColor: '#EFEBE9', padding: 15, borderRadius: 10, marginBottom: 15, color: '#4E342E' },
  forgotPassword: { color: '#8B5E3C', textAlign: 'right', marginBottom: 20 },
  button: { backgroundColor: '#8B5E3C', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#FFF8E7', fontSize: 16, fontWeight: 'bold' },
  createAccountText: { textAlign: 'center', marginTop: 20, color: '#6D4C41' },
  linkText: { color: '#8B5E3C', fontWeight: 'bold' },
});

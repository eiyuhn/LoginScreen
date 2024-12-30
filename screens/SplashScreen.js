import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, Animated } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const logoScale = new Animated.Value(0.8);
  const logoOpacity = new Animated.Value(0);

  useEffect(() => {
    // Simulate a 3-second loading time before navigating to the LoginScreen
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    // Animation for the logo
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoScale, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animated.Image
          source={require('../assets/orig_logo.png')} // Replace with your logo path
          style={[styles.logo, { transform: [{ scale: logoScale }], opacity: logoOpacity }]}
        />
        <Animated.Text style={[styles.title, { opacity: logoOpacity }]}>Cup of IJ</Animated.Text>
      </View>

      {/* Aesthetic Background Design */}
      <View style={styles.gradientContainer}>
        <View style={styles.curve}></View>
        <View style={styles.curveReverse}></View>
        <View style={styles.dotsContainer}>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3E0', // Light beige background
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    zIndex: 10,
  },
  logo: {
    width: 120,
    height: 120,
  },
  title: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#B5835A', // Light brown text
  },
  gradientContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    zIndex: 0,
  },
  curve: {
    width: '120%',
    height: '50%',
    backgroundColor: '#D6A86C', // Light brown
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    transform: [{ translateX: '-10%' }],
    position: 'absolute',
    bottom: 0,
  },
  curveReverse: {
    width: '130%',
    height: '50%',
    backgroundColor: '#B5835A', // Slightly darker brown
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    transform: [{ translateX: '-15%' }, { translateY: 50 }],
    position: 'absolute',
    bottom: 0,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginHorizontal: 5,
    opacity: 0.5,
  },
});

export default LoadingScreen;

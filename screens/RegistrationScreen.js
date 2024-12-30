import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
    const navigation = useNavigation();

    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const goToLoginScreen = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assets/bg1.png")} style={styles.bgImage} />
                <Image source={require("../assets/orig_logo.png")} style={styles.logoImage} />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Create Account</Text>
                <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#aaa" />
                <TextInput style={styles.input} placeholder="Contact Number" placeholderTextColor="#aaa" keyboardType="phone-pad" />
                <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />
                <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#aaa" secureTextEntry />
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
                        {isChecked && <View style={styles.checkedBox} />}
                    </TouchableOpacity>
                    <Text style={styles.checkboxText}>I accept the terms and conditions</Text>
                </View>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createButtonText}>Create</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToLoginScreen}>
                    <Text style={styles.footerText}>
                        Already have an account? <Text style={styles.linkText}>Click here!</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7E9D7',
        paddingBottom: 200,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8B5E3C',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingBottom: 40,
    },
    bgImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.3,
    },
    logoImage: {
        width: 120,
        height: 130,
        resizeMode: 'contain',
        top: 20,
    },
    formContainer: {
        flex: 2,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4E342E',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#FFF8E7',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        color: '#4E342E',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#8B5E3C',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkedBox: {
        width: 12,
        height: 12,
        backgroundColor: '#8B5E3C',
    },
    checkboxText: {
        fontSize: 14,
        color: '#4E342E',
    },
    createButton: {
        backgroundColor: '#8B5E3C',
        borderRadius: 25,
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 10,
        shadowColor: '#8B5E3C',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    createButtonText: {
        color: '#FFF8E7',
        fontSize: 18,
        fontWeight: '600',
    },
    footerText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#6D4C41',
        marginTop: 20,
    },
    linkText: {
        color: '#8B5E3C',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

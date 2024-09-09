import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
    const navigation = useNavigation();

    const [isChecked, setIsChecked] = useState(false);  // State for checkbox

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);  // Toggles checkbox
    }

    const goToLoginScreen = () => {
        navigation.navigate('Login');  // Navigate to LoginScreen
    }

    return (
        <View style={styles.container}>
            <View style={styles.bgContainer}>
                <Image source={require("../assets/bg1.png")} style={styles.bgImage} />
            </View>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/orig_logo.png")} style={styles.logoImage}/>
            </View>
            <View style={styles.extraContainer}>
                <Image source={require("../assets/add.png")} style={styles.additionalImage}/>
            </View>
           
            <View style={styles.createContainer}>
                <Text style={styles.createLabel}>Create account</Text> 
            </View>
            <View style={styles.regInfosContainer}>
                <View>
                    <Text style={styles.nameText}>Name</Text>
                </View>
                <View style={styles.nameContainer}>
                    <TextInput style={styles.nameTextInput} 
                    placeholder="Enter name" /> 
                </View>
                <View>
                    <Text style={styles.numText}>Contact Number</Text>
                </View>
                <View style={styles.numContainer}>
                    <TextInput style={styles.numTextInput} 
                    placeholder="Enter number" /> 
                </View>
                <View>
                    <Text style={styles.emailText}>Email</Text>
                </View>
                <View style={styles.emailAddressContainer}>
                    <TextInput style={styles.emailAddressTextInput} 
                    placeholder="Enter email" /> 
                </View>
                <View>
                    <Text style={styles.passwordText}>Password</Text>
                </View>
                <View style={styles.passwordContainer}>
                    <TextInput style={styles.passwordTextInput} 
                    placeholder="Enter password" secureTextEntry/> 
                </View>
                <View>
                    <Text style={styles.confirmPasswordText}>Confirm Password</Text>
                </View>
                <View style={styles.confirmPasswordContainer}>
                    <TextInput style={styles.confirmPasswordTextInput} 
                    placeholder="Enter password" secureTextEntry/> 
                </View>
            </View>

            <View style={styles.checkboxContainer}>
                <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
                    {isChecked && <View style={styles.checkedBox} />} 
                </TouchableOpacity>
                <Text style={styles.acceptText}>I have accepted the terms and conditions.</Text>
            </View>

            <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}> Create </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToLoginScreen}>
                <Text style={styles.haveAccount}>Already have an account.</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RegistrationScreen;

const styles = StyleSheet.create({
    bgContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    bgImage: {
        width: "100%",
        height: 900,
        position: 'absolute',
        top: 30,
        left: 0,
    },

    logoContainer: {
        position: 'absolute',
        top: 35,
        left: 1,
    },

    extraContainer: {
        position: 'absolute',
        bottom: -725,   
        right: -10,   
    },

    additionalImage: {
        width: 140,
        height: 140,
    },
    
    logoImage: {
        width: 100,
        height: 100,
    },

    createContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 190,
        width: '100%'
    },

    createLabel: {
        fontSize: 30, 
        fontWeight: '700', 
        color: '#333', 
        marginBottom: 20,
        fontFamily: 'Sans-serif',
        top:-50,
    },

    regInfosContainer: {
        width: '90%',
        marginLeft: 15,
        position: 'absolute',
        top: 200,
    },

    nameText: {
        width: '100%',
        color: 'black', 
        fontSize: 16,
        fontFamily: 'sans-serif',
        left:10,
    },

    nameContainer: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'beige',
        borderRadius: 20,
        padding:10,
        
    },

    nameTextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        fontSize: 16,
        fontFamily: 'sans-serif',
        color: '#333',
        
    },

    numText: {
        width: '100%',
        color: 'black', 
        fontSize: 16,
        fontFamily: 'sans-serif',
        left:10,
    },

    numContainer: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'beige',
        borderRadius: 20,
        padding:10,
        
    },

    numTextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        fontSize: 16,
        fontFamily: 'sans-serif',
        color: '#333',
        
    },

    emailText: {
        width: '100%',
        color: 'black', 
        fontSize: 16,
        fontFamily: 'sans-serif',
        left:10,
    },

    emailAddressContainer: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: 'beige',
        borderRadius: 20,
        padding:10,
    },

    emailAddressTextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        fontSize: 16,
        fontFamily: 'sans-serif',
        color: '#333',
        
    },

    passwordText: {
        width: '100%',
        color: 'black',
        fontSize: 16,
        fontFamily: 'sans-serif',
        left:10,
    },

    passwordContainer: {
        width: '100%',
        backgroundColor: 'beige',
        borderRadius: 20,
        padding:10,
    },

    passwordTextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        fontSize: 16,
        fontFamily: 'sans-serif',
        color: '#333',
    },

    confirmPasswordText: {
        width: '100%',
        color: 'black',
        marginTop:10,
        fontSize: 16,
        fontFamily: 'sans-serif',
        left:10,
    },

    confirmPasswordContainer: {
        width: '100%',
        backgroundColor: 'beige',
        borderRadius: 20,
        padding:10,
    },

    confirmPasswordTextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        fontSize: 16,
        fontFamily: 'sans-serif',
        color: '#333',
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 620,
        left: 30,
    },

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    checkedBox: {
        width: 12,
        height: 12,
        backgroundColor: '#333',
    },

    acceptText: {
        fontSize: 14,
        color: 'black',
        fontWeight:'800',
        fontFamily: 'sans-serif',
    },

    createButton: {
        backgroundColor: '#3D3D4C',
        borderRadius: 20,
        alignItems: 'center',
        top: 670,
        width: '90%',
        marginLeft: 16
    },

    createButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 15,
        fontFamily: 'sans-serif',
    },

    haveAccount: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'sans-serif',
        top: 680,
        left: 180,
    },
});

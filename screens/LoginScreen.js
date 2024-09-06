import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bgContainer}>
                <Image source={require("../assets/bg1.png")} style={styles.bgImage} />
            </View>
            <View style={styles.logoContainer}>
                <Image source={require("../assets/orig_logo.png")} style={styles.logoImage}/>
            </View>
            <View style={styles.accountContainer}>
                <Image source={require("../assets/fb.png")} style={styles.fbImage}/>
                <Image source={require("../assets/google.png")} style={styles.googleImage}/>
                <Image source={require("../assets/apple.png")} style={styles.appleImage}/>
            </View>
            <View style={styles.extraContainer}>
                <Image source={require("../assets/add.png")} style={styles.additionalImage}/>
            </View>
           
            <View style={styles.loginContainer}>
                <Text style={styles.loginLabel}>Login</Text> 
            </View>
            <View style={styles.loginInfosContainer}>
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
            </View>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}> Login </Text>
            </TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password? </Text>
        </View>
    );
}

export default LoginScreen;

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
        bottom: -735,   
        right: -10,   
    },

    additionalImage: {
        width: 150,
        height: 150,
    },

    accountContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        position: 'absolute',
        top: 545,
        width: '100%', 
    },
    
    fbImage: {
        width: 43,
        height: 43,
    },
    
    googleImage: {
        width: 50,
        height: 50,
        top:1
    },
    
    appleImage: {
        width: 60,
        height: 60,
        top:-5
    },
    
    logoImage: {
        width: 115,
        height: 114,
    },

    loginContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 200,
        width: '100%'
    },

    loginLabel: {
        fontSize: 30, 
        fontWeight: '700', 
        color: '#333', 
        marginBottom: 20,
        fontFamily: 'Sans-serif',
        top:-50,
    },

    loginInfosContainer: {
        width: '90%',
        marginLeft: 15,
        position: 'absolute',
        top: 215,
        
    },

    emailText: {
        width: '100%',
        color: 'black', 
        marginBottom: 10,
        fontSize: 16,
        fontFamily: 'sans-serif',
        left:10,
    },

    emailAddressContainer: {
        width: '100%',
        marginBottom: 25,
        backgroundColor: 'beige',
        borderRadius: 20,
        padding:15,
        
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
        marginBottom: 10,
        marginTop:10,
        fontSize: 16,
        fontFamily: 'sans-serif',
        left:10,
    },

    passwordContainer: {
        width: '100%',
        backgroundColor: 'beige',
        borderRadius: 20,
        padding:15,
    },

    passwordTextInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%',
        fontSize: 16,
        fontFamily: 'sans-serif',
        color: '#333',
    },

    forgotPasswordText: {
        fontSize: 14,
        color: '#ff5252',
        fontWeight:'800',
        textAlign: 'right',
        marginRight: 20,
        position: 'absolute',
        right: 0,
        top: 450,
        fontFamily: 'sans-serif',
    },

    loginButton: {
        backgroundColor: '#3D3D4C',
        borderRadius: 20,
        alignItems: 'center',
        top: 490,
        width: '90%',
        marginLeft: 16
    },

    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 15,
        fontFamily: 'sans-serif',
        
    },
});

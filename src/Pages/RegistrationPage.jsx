import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const musicLogo = require('../assets/logo.jpg');

export default function RegistrationPage() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    function handleLogin(){
        navigation.navigate("LoginPage");
    }

    const handleRegistration = () => {

        /*if (!validateEmail(email)) {
            alert('Formato de e-mail inválido. Por favor introduza um e-mail do formato ISPTEC.');
            return;
        }*/

        navigation.navigate("Home");
    };

    const validateEmail = (email) => {
        const emailRegex = /^(19|20)\d{6}@isptec.co.ao$/;
        return emailRegex.test(email);


    };

    return (
        <>
            <View style={styles.container}>


                <ScrollView>

                <Image style={styles.logo} source={musicLogo} />


                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Name"
                            placeholderTextColor="#fff"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Surname"
                            placeholderTextColor="#fff"
                            value={surname}
                            onChangeText={(text) => setSurname(text)}
                        />
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email"
                            placeholderTextColor="#fff"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Password"
                            placeholderTextColor="#fff"
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
                        <Text style={styles.registerButtonText}>REGISTER</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.registerText}>Já tem conta? Faça login</Text>
                </TouchableOpacity>


                </ScrollView>



            </View>
        </>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 200,
        marginTop: 100,
        marginBottom:50,
    },
    inputView: {
        width: 300,
        backgroundColor: 'pink',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: 'white',
    },
    registerButton: {
        width: 100,
        backgroundColor: 'pink',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        alignSelf: 'center',
    },
    registerButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    registerText: {
        color: 'pink',
        fontSize: 16,
        opacity: 0.7,
        alignSelf: 'center',
    },
});


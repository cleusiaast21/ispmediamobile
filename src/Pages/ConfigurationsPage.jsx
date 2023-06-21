import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const profilePicture = require('../assets/artist.webp');

export default function ConfigurationsPage() {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleProfilePictureUpload = () => {
        // Implement profile picture upload logic
    };

    const handleUsernameEdit = () => {
        // Implement username edit logic
    };

    const handlePasswordChange = () => {
        // Implement password change logic
    };

    const handleAccountDeletion = () => {
        // Implement account deletion logic
    };

    const handleLogout = () => {
        // Implement logout logic
    };

    function goHome(){
        navigation.navigate("Upload");
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={goHome}>
                <Ionicons style={styles.iconBack} name="chevron-back-outline" size={30} color="black" />
            </TouchableOpacity>
            
            <Image source={profilePicture} style={styles.profilePicture} />

            <Text style={styles.label}>valter_ramos</Text>

            <TouchableOpacity style={styles.uploadButton} onPress={handleProfilePictureUpload}>
                <Text style={styles.uploadButtonText}>Upload Profile Picture</Text>
            </TouchableOpacity>

            <View style={styles.inputView}>
                
                
                <TouchableOpacity style={styles.editButton} onPress={handleUsernameEdit}>
                    <Text style={styles.editButtonText}>Change username</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputView}>
                <TouchableOpacity style={styles.editButton} onPress={handlePasswordChange}>
                    <Text style={styles.editButtonText}>Change Password</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputView}>
                <TouchableOpacity style={styles.editButton} onPress={handlePasswordChange}>
                    <Text style={styles.editButtonText}>Third option</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>

            

            <TouchableOpacity style={styles.deleteButton} onPress={handleAccountDeletion}>

                <Ionicons name="trash-outline" size={25} color="white" />
                <Text style={styles.deleteButtonText}>Delete Account</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconBack: {
        marginRight: 400,
        marginBottom: 20,

    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    uploadButton: {
        backgroundColor: 'pink',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    uploadButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputView: {
        width: 300,
        marginBottom: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
        opacity: 0.5,
    },
    inputText: {
        height: 40,
        backgroundColor: '#eee',
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    editButton: {
        backgroundColor: 'pink',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    deleteButton: {
        backgroundColor: 'red',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginTop: 20,
    },
    deleteButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5,
    },
    logoutButton: {
        backgroundColor: 'pink',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logoutButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

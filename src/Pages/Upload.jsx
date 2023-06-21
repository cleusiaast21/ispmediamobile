import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomNav from '../components/BottomNav.jsx';

const musicCover = require('../assets/cover.jpeg');
const profileImage = require('../assets/artist.webp');

export default function Upload() {

    const navigation = useNavigation();

    const [songs, setSongs] = useState([
        { id: '1', title: 'Song 1', artist: 'Artist 1', duration: '3:45', type: 'Audio' },
        { id: '2', title: 'Song 2', artist: 'Artist 2', duration: '0:13', type: 'Audio' },
        { id: '3', title: 'Song 3', artist: 'Artist 3', duration: '1:45', type: 'Video' },
        { id: '4', title: 'Song 4', artist: 'Artist 4', duration: '9:45', type: 'Video' },
        { id: '5', title: 'Song 5', artist: 'Artist 5', duration: '9:45', type: 'Video' },
        { id: '6', title: 'Song 6', artist: 'Artist 6', duration: '9:45', type: 'Video' },
    ]);

    function goToMedia() {
        /*navigation.navigate("MusicPage");*/
    }

    function editMedia() {
        /*navigation.navigate("MusicPage");*/
    }

    const handleUpload = () => {
        // Implement your upload logic here
        // Perform necessary actions, such as selecting files and uploading them
    };

    function config() {
        navigation.navigate("ConfigurationsPage");
    }

    const goHome = () => {
        navigation.navigate('Home');
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity onPress={goToMedia}>
                <Image source={musicCover} style={styles.coverImage} />
            </TouchableOpacity>
            <View style={styles.itemInfo}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.duration}>Duration: {item.duration}</Text>
                <Text style={styles.type}>Type: {item.type}</Text>
            </View>

            <TouchableOpacity style={styles.editButton} onPress={editMedia}>
                <Text style={styles.uploadButtonText}>Editar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity onPress={goHome}>
                    <Ionicons style={styles.iconBack} name="chevron-back-outline" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.label}>Upload</Text>

                <Image source={profileImage} style={styles.profileImage} />

                <TouchableOpacity onPress={config}>
                    <Ionicons style={styles.iconSettings} name="settings-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.uploadContainer}>
                <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
                    <Text style={styles.uploadButtonText}>Upload Content</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>My Media</Text>

            <View style={styles.myMedia}>
                <FlatList style={styles.scrollContainer}
                    data={songs}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
            </View>


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        marginTop: 70,
        alignItems: 'center',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginRight: 10,
    },
    iconSettings: {
        marginRight: 5,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'grey',
        paddingRight: 200,
        opacity: 0.5,
    },
    uploadContainer: {
        backgroundColor: 'pink',
        width: 385,
        height: 100,
        borderRadius: 20,
        marginTop: 25,
        alignItems: 'center',
    },
    uploadButton: {
        backgroundColor: 'red',
        borderRadius: 25,
        height: 50,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    uploadButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    scrollContainer: {
        marginTop: 5,
        backgroundColor: 'white',
        width: 385,
        paddingLeft: 20,
        marginBottom: 275,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 250,
        marginBottom: 5,
        marginTop: 20,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 15,
        borderColor: 'pink',
        borderWidth: 1,
    },
    editButton: {
        backgroundColor: 'pink',
        borderRadius: 5,
        right: -95,
        top: -25,
        width: 60,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    coverImage: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    artist: {
        fontSize: 14,
        color: 'gray',
        marginTop: 15,
    },
    duration: {
        fontSize: 12,
        color: 'gray',
    },
    type: {
        fontSize: 12,
        color: 'gray',
    },
});

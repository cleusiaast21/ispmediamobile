import React, { useState } from "react";
import { View, StyleSheet, Image, TextInput, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const musicLogo = require('../assets/logo.jpg');
const musicCover = require('../assets/cover.jpeg');

export default function BottomNav() {

    const navigation = useNavigation();

    function goHome() {
        navigation.navigate("Home");
    }

    function radioPage() {
        navigation.navigate("RadioPage");
    }

    function uploadMedia() { 
        navigation.navigate("Upload");
    }

    function currentSong() {
        navigation.navigate("MusicPage");
    }

    function viewVideos() {
        navigation.navigate("VideosPage");
    }

    return (
        <>
            <View style={styles.container}>

                <View style={styles.bottomNav}>
                    <TouchableOpacity onPress={goHome}>
                        <Ionicons name="home-outline" size={30} color="pink" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={radioPage}>
                        <Ionicons name="radio-outline" size={30} color="pink" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={currentSong}>
                        <View style={styles.circleContainer} >
                            <Image source={musicCover} style={styles.circleImage} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={viewVideos}>
                        <Ionicons name="film-outline" size={30} color="pink" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={uploadMedia}>
                        <Ionicons name="cloud-upload-outline" size={30} color="pink" />
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: 'grey',
        marginBottom: 0,
    },
    circleContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'pink',
        overflow: 'hidden',
    },
    circleImage: {
        width: '100%',
        height: '100%',
    },
});

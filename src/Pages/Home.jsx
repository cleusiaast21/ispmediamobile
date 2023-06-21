import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomNav from '../components/BottomNav.jsx';

const musicCover = require('../assets/cover.jpeg');
const profileImage = require('../assets/artist.webp');


const mostPlayedData = [
    { id: '1', title: 'Song 1', cover: require('../assets/cover.jpeg') },
    { id: '2', title: 'Song 2', cover: require('../assets/cover.jpeg') },
    { id: '3', title: 'Song 3', cover: require('../assets/cover.jpeg') },
    { id: '4', title: 'Song 3', cover: require('../assets/cover.jpeg') },
    { id: '5', title: 'Song 3', cover: require('../assets/cover.jpeg') },
];

const madeForYouData = [
    { id: '1', title: 'Artist 1', cover: require('../assets/cover.jpeg') },
    { id: '2', title: 'Artist 2', cover: require('../assets/cover.jpeg') },
    { id: '3', title: 'Artist 3', cover: require('../assets/cover.jpeg') },
    { id: '4', title: 'Artist 4', cover: require('../assets/cover.jpeg') },
];

const upcomingArtistsData = [
    { id: '1', title: 'Upcoming Artist 1', cover: require('../assets/artist.webp') },
    { id: '2', title: 'Upcoming Artist 2', cover: require('../assets/artist.webp') },
    { id: '3', title: 'Upcoming Artist 3', cover: require('../assets/artist.webp') },
    { id: '4', title: 'Upcoming Artist 4', cover: require('../assets/artist.webp') },
    { id: '5', title: 'Upcoming Artist 5', cover: require('../assets/artist.webp') },
];

const newReleasesData = [
    { id: '1', title: 'Song 10', name: 'Artist 10', cover: require('../assets/cover.jpeg') },
    { id: '2', title: 'Song 11', name: 'Artist 11', cover: require('../assets/cover.jpeg') },
    { id: '3', title: 'Song 12', name: 'Artist 12', cover: require('../assets/cover.jpeg') },
    { id: '4', title: 'Song 13', name: 'Artist 13', cover: require('../assets/cover.jpeg') },
];

export default function MusicPage() {

    const navigation = useNavigation();

    const renderHorizontalItem = ({ item, sectionTitle }) => (
        <View style={styles.horizontalItem}>
            <Image source={item.cover} style={sectionTitle === 'Upcoming Artists' ? styles.circularCover : styles.rectangularCover} />
            <Text style={styles.horizontalTitle}>{item.title}</Text>
            {item.name && <Text style={styles.horizontalArtist}>{item.name}</Text>}
        </View>
    );

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.label}>Olá, Valter Ramos!</Text>

                <Image source={profileImage} style={styles.profileImage} />

                <TouchableOpacity>
                    <Ionicons style={styles.iconSearch} name="search-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollContainer}>

                <Text style={styles.sectionTitle}>New Releases</Text>
                <FlatList
                    data={newReleasesData}
                    renderItem={renderHorizontalItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.sectionTitle}>Favorites</Text>
                <FlatList
                    data={newReleasesData}
                    renderItem={renderHorizontalItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.sectionTitle}>Upcoming Artists</Text>
                <FlatList
                    data={upcomingArtistsData}
                    renderItem={({ item }) => renderHorizontalItem({ item, sectionTitle: 'Upcoming Artists' })}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.sectionTitle}>Most Played</Text>
                <FlatList
                    data={mostPlayedData}
                    renderItem={renderHorizontalItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={styles.sectionTitle}>Made for You</Text>
                <FlatList
                    data={madeForYouData}
                    renderItem={renderHorizontalItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />

            </ScrollView>

            <BottomNav></BottomNav>
                                                                                              
        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        marginTop: 70,
    },
    iconSearch: {
        marginRight: 5,
        marginTop: 15,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginRight: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'grey',
        paddingRight: 100,
        opacity: 0.5,
    },
    scrollContainer: {
        marginTop: 5,
        marginBottom: 70,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 0,
        marginTop: 30,
    },
    horizontalItem: {
        marginLeft: 10,
    },
    rectangularCover: {
        marginTop: 10,
        width: 150,
        height: 150,
        borderRadius: 0,
    },
    circularCover: {
        marginTop: 10,
        width: 100,
        height: 100,
        borderRadius: 75,
    },
    horizontalTitle: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    horizontalArtist: {
        fontSize: 14,
        color: 'gray',
    },
});


import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, FlatList, Text } from 'react-native';
import { Video } from 'expo-av';
import BottomNav from '../components/BottomNav.jsx';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const videos = [
  {
    id: 1,
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: require('../assets/cover.jpeg'),
    description: 'This is the first Video, it is a short film. It is a mini movie.',
  },
  {
    id: 2,
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: require('../assets/cover.jpeg'),
    description: 'This is the second Video, it is a short film. It is a mini movie.',
  },
  {
    id: 3,
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: require('../assets/cover.jpeg'),
    description: 'This is the third Video, it is a short film. It is a mini movie.',
  },
  {
    id: 4,
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: require('../assets/cover.jpeg'),
    description: 'This is the fourth Video, it is a short film. It is a mini movie.',
  },
  {
    id: 5,
    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: require('../assets/cover.jpeg'),
    description: 'This is the fifth Video, it is a short film. It is a mini movie.',
  },
];

export default function VideoPage() {

  const navigation = useNavigation();

  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRef = useRef(null);

  const handlePlayPress = async (video) => {
    try {
      if (currentVideo === video) {
        if (videoRef.current?.isPlaying) {
          await videoRef.current?.pauseAsync();
        } else {
          await videoRef.current?.playAsync();
        }
      } else {
        await videoRef.current?.unloadAsync();
        await videoRef.current?.loadAsync({ uri: video.uri });
        await videoRef.current?.playAsync();
        setCurrentVideo(video);
      }
    } catch (error) {
      console.log('Error playing video:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.videoItem} onPress={() => handlePlayPress(item)}>
      {currentVideo === item ? (
        <Video
          ref={videoRef}
          source={{ uri: item.uri }}
          style={styles.video}
          useNativeControls={true}
        />
      ) : (
        <>
          <View style={styles.videoInfo}>
            <Image source={item.thumbnail} style={styles.thumbnail} />
            <Ionicons name="play-circle-outline" size={60} color="white" style={styles.playIcon} />
          </View>
          <Text style={styles.videoDescription}>{item.description}</Text>
        </>
      )}
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.label}>Videos</Text>
        <TouchableOpacity>
          <Ionicons style={styles.iconSearch} name="search-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Popular Videos</Text>


      <FlatList style={styles.scroll}
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={true}
      />

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    marginTop: 70,
  },
  iconSearch:{
    marginLeft: 90,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'grey',
    paddingRight: 180,
    opacity: 0.5,
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  scroll: {
    marginBottom: 50,

  },
  videoItem: {
    aspectRatio: 16 / 9,
    marginBottom: 10,
    padding: 10,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 60,
    height: 60,
    resizeMode: 'contain',
    opacity: 0.9,
    transform: [{ translateX: -30 }, { translateY: -30 }],
  },
  videoInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  videoDescription: {
    marginTop: 5,
    textAlign: 'left',
  },
});

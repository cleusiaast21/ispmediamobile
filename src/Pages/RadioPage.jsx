import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import BottomNav from '../components/BottomNav';

const profileImage = require('../assets/artist.webp');

const RadioPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(null);

  useEffect(() => {
    setupPlayer();

    return () => {
      cleanupPlayer();
    };
  }, []);

  const setupPlayer = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: 'https://live.wostreaming.net/direct/townsquare-wdksfmmp3-ibc3.mp3' },
        { shouldPlay: false },
        onPlaybackStatusUpdate
      );
      setSoundObject(sound);
    } catch (error) {
      console.log('Error setting up player:', error);
    }
  };

  const onPlaybackStatusUpdate = (status) => {
    if (!status.isLoaded) {
      // Handle error when audio fails to load
      console.log('Error loading audio:', status.error);
    } else {
      setIsPlaying(status.isPlaying);
    }
  };

  const cleanupPlayer = async () => {
    try {
      if (soundObject) {
        await soundObject.unloadAsync();
        setSoundObject(null);
      }
    } catch (error) {
      console.log('Error cleaning up player:', error);
    }
  };

  const togglePlayback = async () => {
    try {
      if (soundObject) {
        if (isPlaying) {
          await soundObject.pauseAsync();
        } else {
          await soundObject.playAsync();
        }
        setIsPlaying(!isPlaying);
      } else {
        console.log('Sound object is not yet set');
      }
    } catch (error) {
      console.log('Error toggling playback:', error);
    }
  };


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.label}>Radio</Text>
        <Image source={profileImage} style={styles.profileImage} />
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={togglePlayback}
      >
        <Text style={styles.playButtonText}>
          {isPlaying ? 'Pause' : 'Play'}
        </Text>
      </TouchableOpacity>

      <BottomNav></BottomNav>
    </View>
  );
};

export default RadioPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  playButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});


import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';

// Resto do código...


const AudioPage = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    return () => {
      // Limpar recursos de áudio ao desmontar o componente
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const loadSound = async () => {
    try {
      const { sound: audioSound } = await Audio.Sound.createAsync(
        require('../assets/song.mp3'),
        { shouldPlay: false },
        updatePlaybackStatus
      );
      setSound(audioSound);
    } catch (error) {
      console.log('Erro ao carregar o áudio:', error);
    }
  };

  const updatePlaybackStatus = (status) => {
    setPosition(status.positionMillis);
    setDuration(status.durationMillis);
  };

  const playSound = async () => {
    try {
      if (sound) {
        await sound.playAsync();
        setIsPlaying(true);
      } else {
        await loadSound();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Erro ao reproduzir o áudio:', error);
    }
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  const handleSliderChange = (value) => {
    if (sound) {
      sound.setPositionAsync(value);
      setPosition(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página de Áudio</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        minimumTrackTintColor="#007AFF"
        maximumTrackTintColor="#000"
        thumbTintColor="#007AFF"
        onValueChange={handleSliderChange}
      />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={isPlaying ? pauseSound : playSound}>
          <Text style={styles.buttonText}>{isPlaying ? 'Pausar' : 'Reproduzir'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={stopSound}>
          <Text style={styles.buttonText}>Parar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  slider: {
    width: '80%',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default AudioPage;
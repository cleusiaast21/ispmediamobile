import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationPage from './src/Pages/RegistrationPage.jsx';
import LoginPage from './src/Pages/LoginPage.jsx';
import Home from './src/Pages/Home.jsx';
import MusicPage from './src/Pages/MusicPage.jsx';
import Upload from './src/Pages/Upload.jsx';
import ConfigurationsPage from './src/Pages/ConfigurationsPage.jsx';
import RadioPage from './src/Pages/RadioPage.jsx';
import VideosPage from './src/Pages/VideosPage.jsx';
import Audio from './src/Pages/Audio.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Audio"
          component={Audio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegistrationPage"
          component={RegistrationPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MusicPage"
          component={MusicPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Upload"
          component={Upload}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConfigurationsPage"
          component={ConfigurationsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RadioPage"
          component={RadioPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideosPage"
          component={VideosPage}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

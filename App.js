import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Pressable, Linking } from 'react-native';
import React, {useCallback} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilScreen from './Screens/profilScreen'
import MapScreen from './Screens/mapScreen'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Profil" component={ProfilScreen} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="person" color={color} size={size} />),}}/>
          <Tab.Screen name="Map" component={MapScreen} options={{headerShown: false, tabBarIcon: ({ color, size }) => (<Ionicons name="map" color={color} size={size} />),}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}


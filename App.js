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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  presentation: {
    flex: 1,
  },
  imgProfil: {
    flex:0.5,
    alignItems: 'center',
    justifyContent: "center",
    
  },
  txtProfil: {
    flex:0.5,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#A52A2A",
  },
  secondPart: {
    margin: 30,
  },
  contact: {
    flex: 1,
  },
  imgContact: {
    flex:0.40,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-evenly",

  },
  call: {
    flex: 0.35,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "lightgreen",
  },
  btnCall:{
    backgroundColor:"lightgrey",
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: "center",
    margin: 10,
  },
  smsMail: {
    flex: 0.25,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: "red",
  },
});

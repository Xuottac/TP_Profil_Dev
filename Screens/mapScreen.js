import { SafeAreaView, StyleSheet, Text, View, Image, Button, Pressable, Linking } from 'react-native';
import React, {useCallback} from 'react';
import MapView, { Marker, Circle, Callout } from 'react-native-maps';

export default function MapScreen() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Localisation de ma Société 🗺️</Text>
      <View style={styles.card}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.85679108910881,
            longitude: 2.392559360270229,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 48.85679108910881,
              longitude: 2.392559360270229,
            }}
            title={'Entreprise'}
            description={'Ma société !'}>
            <Callout>
              <View>
                <Text style={styles.calloutTitle}>Entreprise</Text>
                <Text>Ma société !</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    width: '90%',
    height: '70%',
  },
  map: {
    flex: 1,
  },
  calloutTitle: {
    fontWeight: 'bold',
  },
});
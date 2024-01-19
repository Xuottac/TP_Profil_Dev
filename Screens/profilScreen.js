import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Pressable, Linking } from 'react-native';
import React, {useCallback} from 'react';

const Description = props => {
  return (
    <View style={styles.secondPart}>
      <Text>{props.desc}</Text>
    </View>
  );
};

const OpenURLButton = (url) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return handlePress;
};



export default function ProfilScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.presentation}>
          <View style={styles.imgProfil}>
          <Image style={{width: 100, height: 100, borderRadius: 100/ 2}} source={require("../assets/Logo.png")}/>
          </View>
          <View style={styles.txtProfil}>
            <View>
              <Text>Alric Cattoux</Text>
              <Text>Développeur Web</Text>
            </View>
            <Description desc="Développeur débutant je suis à la recherche d'expérience dans le domaine du développement."/>
          </View>
        </View>
        <View style={styles.contact}>
          <View style={styles.imgContact}>
            <Pressable onPress={OpenURLButton("https://www.instagram.com/")}>
              <Image style={{width: 60, height: 60, borderRadius: 60/ 2}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'}}/>
            </Pressable>
            <Pressable onPress={OpenURLButton("https://www.facebook.com/?locale=fr_FR")}>
              <Image style={{width: 60, height: 60, borderRadius: 60/ 2}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/480px-Facebook_f_logo_%282019%29.svg.png'}}/>
            </Pressable>
            <Pressable onPress={OpenURLButton("https://www.tiktok.com/fr/")}>
              <Image style={{width: 60, height: 60, borderRadius: 60/ 2}} source={{uri:'https://img.freepik.com/vecteurs-premium/logo-tik-tok_578229-290.jpg'}}/>
            </Pressable>
          </View>
          <View style={styles.call}>
            <Pressable style={styles.btnCall}>
              <Text>CALL</Text>
            </Pressable>
          </View>
          <View style={styles.smsMail}>
            <Pressable style={styles.btnCall}>
              <Text>SMS</Text>
            </Pressable>
            <Pressable style={styles.btnCall}>
              <Text>Mail</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
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
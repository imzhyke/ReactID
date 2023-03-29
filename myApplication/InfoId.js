import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { useState } from "react";
import Hobbies from './Hobbies';
import Movies from './Movies';
import Games from './Games';
import { StyleSheet, Text, View, ImageBackground, Image, Alert, Button} from 'react-native';

const Separator = () => <View style={styles.separator} />;


export default function InfoId({ navigation }) {
    
  return (
    
    <View style={styles.container}>
    <ImageBackground resizeMode="cover" source={require('../myApplication/assets/BG.png')} style={styles.imgbackground}>
      <Image source={require('../myApplication/assets/IdImage.png')} style={styles.IDimage}/>
      <Image source={require('../myApplication/assets/signature.png')} style={styles.signature}/>
      <Text style={styles.name}>EZEKIEL P. VILLADOLID</Text>
      <Text style={styles.text}>BSIT</Text>
      <Separator />
      <Text style={styles.course}>COURSE</Text>
      <Text style={styles.text}>ID No.: <Text style={styles.idnumber}>1190596</Text></Text>
      
      </ImageBackground>
      <View style ={{ marginBottom: 10, marginHorizontal: 20,}}>
      <Button 
        title="Hobbies"
        onPress={() => {
                navigation.navigate("My Hobbies");
        }}
      />
     
     </View>
     <View style ={{ marginBottom: 10, marginHorizontal: 20,}}>
        <Button  
            title="Movies"
            onPress={() => navigation.navigate("My Movies")}
        />
        </View>
        <View style ={{ marginBottom: 10, marginHorizontal: 20,}}>
        <Button  
            title="Games"
            onPress={() => navigation.navigate("My Games")}
        />
      </View>
    </View>

  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
  },
  separator: {
    marginVertical: 10,
    marginLeft: 45,
    borderWidth: 2,
    width: 240,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
    text: {
      color: 'black',
      fontSize: 22,
      textAlign:'center',
      
    },
    idnumber: {
      color: 'black',
      fontSize: 21,
      textAlign:'center',
      fontWeight: 'bold',
    },
    course: {
      fontSize: 16,
      textAlign: 'center',
    },
  imgbackground: {
    flex: 1,
    marginVertical: 10,
    marginLeft: 15,
    width: '94%',

    },
  IDimage: {
    width: 120,
    paddingTop: 10,
    maxHeight: 120,
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 120,
    marginLeft: 100,
   
  },
  signature:{
    width: 120,
    height: 50,
    marginLeft: 110,
    marginTop: 5,
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 5,
    marginVertical: 2,
    marginLeft: 70,
    marginRight: 70
  },

  box: {
    width: 500,
  },
});
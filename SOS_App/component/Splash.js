import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';


export default function Splash({navigation}) {
    const [lat, setLat] = useState(1);
    const [long, setLong] = useState(1);


useEffect(() => {
  (async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
      accuracy: 6,
    });
    setLat(location.coords.latitude)
    setLong(location.coords.longitude)
  })();
}, [lat, long]);
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={()=>{
        navigation.navigate({
            name:'Home',
            params:{longitude:long,latitude:lat}
        })
      }}>
        <Text>go home</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        padding: 20
    },
    btn:{
        borderWidth:20,
        padding:100
    }
})
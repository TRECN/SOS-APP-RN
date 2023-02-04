import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps'

import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const Home = () => {

    const [lat, setLat] = useState(1);
    const [long, setLong] = useState(1);
    const latlang = {
        latitude: lat,
        longitude: long
    }
    const latlang1 = {
        latitude: 23.344101,
        longitude: 85.309563
    }


    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({
              enableHighAccuracy: true,
              accuracy: Location.Accuracy.High,
            });
            console.log(location.coords)
            setLat(location.coords.latitude)
            setLong(location.coords.longitude)
        })();
    }, [lat,long]);

    return (
        <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        style={styles.map}
      >
        <Marker
            key={1}
          title='me'
          coordinate={
            {
              latitude: lat,
              longitude: long
            }}
        >

        </Marker>
        
        <Marker
        key={2}
        title='friend'
        coordinate={latlang1}
        >

        </Marker>
      </MapView>
    </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderWidth:20,
      borderColor:'black',
      padding:20
    },
    map: {
      ...StyleSheet.absoluteFillObject,
      
    },
  });
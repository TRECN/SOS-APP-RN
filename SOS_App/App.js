import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps'
import { StyleSheet, Text, View } from 'react-native';
import { useState ,useEffect} from 'react';
import * as Location from 'expo-location';
export default function App() {
  const [lat,setLat]=useState();
  const [long,setLong]=useState();
  const latlang={latitude: lat,
    longitude: long}
    const latlang1={latitude: 23.344101,
      longitude: 85.309563}

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords)
      setLat(location.coords.latitude)
      setLong(location.coords.longitude)
    })();
  }, []);
  // 23.347385,85.269920
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
          title='me'
          coordinate={latlang}
        >

        </Marker>
        
        <Marker
        title='friend'
        coordinate={latlang1}
        >

        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 1000,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

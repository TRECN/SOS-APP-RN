import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps'

const Home = ({route}) => {
  console.log("location : "+route.params.latitude,route.params.longitude)

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}

        region={{
          latitude: route.params?.latitude,
          longitude: route.params?.longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
        style={styles.map}
      >
        <Marker
          key={1}
          title='me'
          coordinate={{latitude:route.params?.latitude,longitude:route.params?.longitude}}
        >

        </Marker>

      </MapView>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <View style={{padding:40,borderRadius:50,backgroundColor:'red'}}>
          <TouchableOpacity>
            <Text style={{color:'white', textTransform:'uppercase',fontSize:20}}>contacts</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding:40,top:-100,borderRadius:50,backgroundColor:'red'}}>
          <TouchableOpacity>
            <Text style={{color:'white', textTransform:'uppercase',fontSize:20}}>SOS</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding:40,borderRadius:50,backgroundColor:'red'}}>
          <TouchableOpacity>
            <Text style={{color:'white', textTransform:'uppercase',fontSize:20}}>Emergency Text</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    borderWidth: 5,
    borderColor: 'black',
    padding: 20
  },
  map: {
    ...StyleSheet.absoluteFillObject,

  },
});
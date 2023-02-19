import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { StackActions } from '@react-navigation/native';

export default function Login({ navigation }) {
  return (
    <View style={styles.login}>
      <View style={styles.container}>
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              margin:0,
              padding:0,
              backgroundColor:'white'

            }}>
            <View style={{borderWidth:2,borderRadius:50,borderTopRightRadius:50,borderColor:'white',padding:10,backgroundColor:'white'}}>
              <Text style={{backgroundColor:'white',borderRadius:50,fontSize:30,color:'red'}}>Log in</Text>
            </View>
            <TouchableOpacity style={{borderWidth:2,borderRadius:50,borderColor:'red',padding:10,backgroundColor:'red'}} onPress={() => {
              navigation.navigate('Signup')
            }}>
              <Text style={{borderRadius:50,fontSize:30,color:'white'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={{ display: 'flex', alignItems: 'center', width: '100%', height: '90%' }}>
          <View style={{ display: 'flex', flexDirection: 'column', marginTop: 100, width: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, textTransform: 'uppercase', marginRight: 20, color: 'red' }}>username:</Text>
            <TextInput style={{ width: '100%', fontSize: 30, marginTop: 20, borderBottomWidth: 3, borderBottomColor: 'red' }} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', marginTop: 100, width: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, textTransform: 'uppercase', marginRight: 20, color: 'red' }}>Password:</Text>
            <TextInput style={{ width: '100%', fontSize: 30, marginTop: 20, borderBottomWidth: 3, borderBottomColor: 'red' }} secureTextEntry={true} />
          </View>
          
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '70%',
    width: '70%',
    margin: 10,
    padding: 10,
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor: '#e5b0b0'
  }
})
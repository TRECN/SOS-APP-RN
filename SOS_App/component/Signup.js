import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { StackActions } from '@react-navigation/native';

export default function Signup({ navigation }) {
  return (
    <View style={styles.login}>
      <View style={styles.container}>
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              borderWidth: 3,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'red',
              backgroundColor: 'red'

            }}>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Login')
            }}>
              <Text style={{ fontSize: 30, marginRight: 10, marginLeft: 10, color: 'white' }}>Log In</Text>
            </TouchableOpacity>

            <View style={{ backgroundColor: 'white', borderRadius: 50, padding: 10 }} >
              <Text style={{ color: 'red', fontSize: 30 }}>Sign Up</Text>
            </View>
          </View>
        </View>
        <View style={{ display: 'flex', alignItems: 'center', width: '100%', height: '90%' }}>
          <View style={{ display: 'flex', flexDirection: 'column', marginTop: 50, width: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, textTransform: 'uppercase', marginRight: 20, color: 'red' }}>username:</Text>
            <TextInput style={{ width: '100%', fontSize: 20, marginTop: 10, borderBottomWidth: 3, borderBottomColor: 'red' }} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', marginTop: 50, width: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, textTransform: 'uppercase', marginRight: 20, color: 'red' }}>e-mail:</Text>
            <TextInput style={{ width: '100%', fontSize: 20, marginTop: 10, borderBottomWidth: 3, borderBottomColor: 'red' }} textContentType='emailAddress' />
          </View>
          
          <View style={{ display: 'flex', flexDirection: 'column', marginTop: 50, width: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, textTransform: 'uppercase', marginRight: 20, color: 'red' }}>Password:</Text>
            <TextInput style={{ width: '100%', fontSize: 20, marginTop: 10, borderBottomWidth: 3, borderBottomColor: 'red' }} secureTextEntry={true} />
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', marginTop: 50, width: '100%', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 15, textTransform: 'uppercase', marginRight: 20, color: 'red' }}>Confirm Password:</Text>
            <TextInput style={{ width: '100%', fontSize: 20, marginTop: 10, borderBottomWidth: 3, borderBottomColor: 'red' }} secureTextEntry={true} />
          </View>
          <View style={{ marginTop: 70, borderWidth: 3, borderRadius: 50, padding: 5, backgroundColor: 'red', borderColor: 'red' }}>
            <TouchableOpacity onPress={() => {
              navigation.dispatch(
                StackActions.replace('Login')
              )
            }}>
              <Text style={{ fontSize: 35, color: 'white' }}>SIGN UP</Text>
            </TouchableOpacity>
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
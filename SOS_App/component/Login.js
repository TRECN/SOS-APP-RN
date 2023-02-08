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
              borderWidth: 3,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'red',
              backgroundColor: 'white'

            }}>
            <Text style={{ fontSize: 30, marginRight: 10, marginLeft: 10, color: 'red' }}>Log in</Text>
            <TouchableOpacity style={{ backgroundColor: 'red', borderRadius: 50, padding: 10 }} onPress={() => {
              navigation.navigate('Signup')
            }}>
              <Text style={{ color: 'white', fontSize: 30 }}>Sign Up</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={{display:'flex',alignItems:'center',width:'100%',height:'90%'}}>
            <View style={{display:'flex', flexDirection:'column',marginTop:100,width:'100%',justifyContent:'space-between'}}>
              <Text style={{fontSize:20,textTransform:'uppercase',marginRight:20,color:'red'}}>username:</Text>
              <TextInput style={{width:'100%',fontSize:30,marginTop:20,borderBottomWidth:3,borderBottomColor:'red'}} />
            </View>
            <View style={{display:'flex', flexDirection:'column',marginTop:100,width:'100%',justifyContent:'space-between'}}>
              <Text style={{fontSize:20,textTransform:'uppercase',marginRight:20,color:'red'}}>Password:</Text>
              <TextInput style={{ width:'100%' ,fontSize:30,marginTop:20,borderBottomWidth:3,borderBottomColor:'red'}} secureTextEntry={true} />
            </View>
            <View style={{marginTop:70,borderWidth:3,borderRadius:50,padding:5,backgroundColor:'red',borderColor:'red'}}>
              <TouchableOpacity onPress={() => {
                navigation.dispatch(
                  StackActions.replace('Splash')
                )
              }}>
                <Text style={{fontSize:35,color:'white'}}>Login IN</Text>
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
    backgroundColor:'#e5b0b0'
  }
})
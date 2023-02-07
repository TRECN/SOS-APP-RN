import { StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import { StackActions } from '@react-navigation/native';

export default function Login({navigation}) {
  return (
    <View style={styles.login}>
      <View style={styles.container}>
        <View style={{display:'flex',flexDirection:'column',height:'70%',alignItems:'flex-start',borderWidth:1}}>
          <View 
            style={{
                display:'flex',
                flexDirection:'row',
                borderWidth:3,
                borderRadius:50,
                alignItems:'center' ,
                justifyContent:'center',
                borderColor:'red',
                backgroundColor:'white'

                }}>
            <Text style={{fontSize:30,marginRight:10,marginLeft:10,color:'red'}}>Log in</Text>
            <TouchableOpacity style={{backgroundColor:'red',borderRadius:50,padding:10}} onPress={()=>{
              navigation.navigate('Signup')
            }}>
              <Text style={{color:'white',fontSize:30}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View>
            <Text>username:</Text>
            <TextInput style={{borderWidth:1}}/>
            </View>
            <View>
            <Text>Password:</Text>
            <TextInput style={{borderWidth:1}} secureTextEntry={true}/>
            </View>
            <View>
              <TouchableOpacity onPress={()=>{
                navigation.dispatch(
                  StackActions.replace('Splash')
                )
              }}>
                <Text>Login IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  login:{
    display:'flex',
    flexDirection:'column',
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
    alignItems:'center',
    justifyContent:'flex-start',
    height:'60%',
    width:'70%',
    margin:10,
    padding:10,
    borderWidth:5,
    borderColor:'red',
    borderRadius:10
  }
})
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.login}>
      <View style={styles.container}>
        <View style={{flex:1,flexDirection:'row',borderWidth:2,height:'20%'}}>
          <Text style={{padding:10,fontSize:30}}>Login</Text>
          <TouchableOpacity >
            <Text style={{padding:10,fontSize:30}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  login:{
    flex:1,
    flexDirection:'column',
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  container:{
    alignItems:'center',
    justifyContent:'center',
    height:'60%',
    width:'70%',
    margin:10,
    padding:10,
    borderWidth:5,
    borderColor:'red',
    borderRadius:10
  }
})
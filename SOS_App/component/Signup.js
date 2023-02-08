import { StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'

export default function Signup({navigation}) {
    return (
        <View style={styles.login}>
          <View style={styles.container}>
            <View style={{display:'flex',flexDirection:'column',height:'70%',alignItems:'flex-start'}}>
              <View 
                style={{
                    display:'flex',
                    flexDirection:'row',
                    borderWidth:3,
                    borderRadius:50,
                    alignItems:'center' ,
                    justifyContent:'center',
                    borderColor:'red',
                    backgroundColor:'red'
    
                    }}>
                    <TouchableOpacity onPress={()=>{
                  navigation.navigate('Login')
                }}>
                            <Text style={{fontSize:30,marginRight:10,marginLeft:10,color:'white'}}>Log In</Text>
                    </TouchableOpacity>
                
                <View style={{backgroundColor:'white',borderRadius:50,padding:10}} >
                  <Text style={{color:'red',fontSize:30}}>Sign Up</Text>
                </View>
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
                  <TouchableOpacity>
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
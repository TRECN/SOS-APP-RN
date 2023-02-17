import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Table,Row } from 'react-native-table-component'

export default function Contacts() {
  const header=['name','Phone no.','Edit','delete']
  const data=[
    {
      id:1,
      name:'Rishabh',
      phone:8434622426
    },
    {
      id:2,
      name:'raj',
      phone:8434622426
    }
  ]

  const Edit=()=>(
    <TouchableOpacity>
      <View>
        <Text>EDIT</Text>
      </View>
    </TouchableOpacity>
  )

  const Del=()=>(
    <TouchableOpacity onPress={()=>{
      Alert.alert('data deleted')
    }}>
      <View>
        <Text>DELETE</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%',borderWidth:10}}>
      <View style={{flex:1,borderWidth:10,width:'100%',justifyContent:'flex-start',alignItems:'center',borderColor:'red'}}>
        <Text style={{color:'red',fontSize:40,textTransform:'uppercase',borderBottomWidth:3,marginTop:40,borderBottomColor:'red'}}>
          Contacts
        </Text>
        <View style={{display:'flex',flexDirection:'row',marginTop:20}}>
        {
          header.map((rowData,index)=>(
            <View key={index} style={{padding:10,backgroundColor:'red',borderWidth:5,borderColor:'white'}}>
              <Text style={{fontSize:20,textTransform:'uppercase',color:'white'}}>{rowData}</Text>
            </View>
          ))
        }
        </View>
        <View style={{borderWidth:3,padding:10}}>
         
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
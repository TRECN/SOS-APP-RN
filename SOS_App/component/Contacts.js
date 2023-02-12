import { StyleSheet, Text, View } from 'react-native'
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
  return (
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%',borderWidth:10}}>
      <View style={{flex:1,borderWidth:10,width:'100%',justifyContent:'center',alignItems:'center',borderColor:'red'}}>
        <Text>
          Contacts
        </Text>
        <Table borderStyle={{borderWidth:1,borderColor:'red'}}>
          <Row data={header} widthArr={[100,150]} style={{height:50}} textStyle={{margin:10,fontSize:20}}/>

          {
            data.map((rawData,index)=>{
              <Row key={index} data={rawData} widthArr={[100,150]} style={{height:50}} textStyle={{margin:10,fontSize:20}}/>
            })
          }  

          <Row data={data[0]} widthArr={[100,150]} textStyle={{margin:10}}/>
        </Table>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
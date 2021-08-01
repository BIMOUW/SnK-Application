import axios from "axios";
import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function List_Dokter({navigation}) {

    const [users,setUsers] = useState([]);


    useEffect(() => {
        getData()
      }, [])


    const getData = ()=>{
        axios.get('http://localhost:3004/doktor').then(result => {
          console.log(result.data)
          setUsers(result.data)
        });
      }

      const Item = ({name, bidang, deskripsi}) =>{
        return(
          <TouchableOpacity style={{backgroundColor:'#28b87a', height: 80, width: '100%',marginBottom: 20, flexDirection:'row', borderRadius: 10}} onPress={() => navigation.navigate('Detail Dokter', {name, bidang, deskripsi})}>
                <View style={{backgroundColor:'white', height: 80 , width:80, borderRadius: 10,}}>
                  <Image source={{uri: `https://i.pravatar.cc/200?u=${name}@pravatar.com`}} style={{height:80,width:80}}/>
                </View>
                <View style={{marginLeft:10, marginTop:10}}>
                  <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>{name}</Text>
                  <Text style={{fontSize:15, fontWeight:'600', color:'white'}}>{bidang}</Text>
                </View>
          </TouchableOpacity>
        )
      }

    return (
        <ScrollView>
            <View style={{flex:1, marginHorizontal: 20, marginTop:40, marginBottom:60}}>
            {users.map(user =>{
            return <Item key={user.id} name={user.name} bidang={user.bidang} deskripsi={user.deskripsi}/>
          })}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

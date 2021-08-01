import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Medical from "../assets/medical.jpg";
import Doctor from "../assets/doctor.png";
import axios from "axios";

export default function Home({navigation}) {


  const [users,setUsers] = useState([]);
  const [layanan,setLayanan] = useState([]);

  useEffect(() => {
    getLayanan()
    getData()
  }, [])

  const getLayanan = ()=>{
    axios.get('http://localhost:3004/pelayanan').then(result=>{
      console.log(result.data);
      setLayanan(result.data);
    })
  }

  const getData = ()=>{
    axios.get('http://localhost:3004/doktor').then(result => {
      console.log(result.data)
      setUsers(result.data)
    });
  }

  const Jenis_Dokter = ({layanan}) =>{
    return(
            <TouchableOpacity style={{height: 80, width: 80, backgroundColor: "#28b87a", borderRadius: 10, marginBottom:20, alignItems:'center',justifyContent:'center'}}>
              <Text style={{textAlign:'center', fontWeight:'bold',color:'white'}}>{layanan}</Text>
            </TouchableOpacity>
    )
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
    <ScrollView style={{ backgroundColor: "white"}}>

      <View>
        <TouchableOpacity style={{backgroundColor: "#28b87a", height: 170, borderRadius: 10,marginHorizontal:20, marginTop:50}}>
          <Image source={Medical} style={{ height: 170, width: "100%", borderRadius: 10,opacity:0.9 }}/>
          <Text style={{position:'absolute', fontWeight:'bold',color:'white',fontSize:50,top:45,left:10}}>TrustMedis</Text>
        </TouchableOpacity>
      </View>

        {/* jenis dokter content*/}
        <View style={{ marginTop: 40, marginHorizontal: 20,flex:1 }}>

        <View style={{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-between'}}>
        {layanan.slice(0,6).map(layanan =>{
          return <Jenis_Dokter layanan={layanan.layanan} key={layanan.id}/>
        })}
        </View>

          <View style={{alignItems:'flex-end', marginTop:20, marginRight:10}}>
            <TouchableOpacity>
              <Text style={{fontWeight:'bold'}} onPress={() => navigation.navigate('Jenis Layanan')}>See All</Text>
            </TouchableOpacity>
          </View> 
        </View>
        {/* end of jenis dokter */}

        {/* nama dokter */}
        <View style={{flex:1, marginHorizontal: 20, marginBottom:60}}>
          {users.slice(0,3).map(user =>{
            return <Item key={user.id} name={user.name} bidang={user.bidang} deskripsi={user.deskripsi}/>
          })}

          <View style={{alignItems:'flex-end', marginTop:20, marginRight:10}}>
            <TouchableOpacity>
              <Text style={{fontWeight:'bold'}} onPress={() => navigation.navigate('List Dokter')}>See All</Text>
            </TouchableOpacity>
          </View> 
        </View>
        {/* end of nama dokter */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({});


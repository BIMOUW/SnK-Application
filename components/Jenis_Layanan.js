import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from "axios";


export default function Jenis_Layanan() {

    const [layanan,setLayanan] = useState([]);

    useEffect(() => {
        getLayanan()
      }, [])

    const getLayanan = ()=>{
        axios.get('http://localhost:3004/pelayanan').then(result=>{
          console.log(result.data);
          setLayanan(result.data);
        })
      }
    const Jenis_Dokter = ({layanan}) =>{
        return(
                <TouchableOpacity style={{height: 80, width: 80, backgroundColor: "#28b87a", borderRadius: 10, marginBottom:20, alignItems:'center',justifyContent:'center' }}>
                   <Text style={{textAlign:'center', fontWeight:'bold',color:'white'}}>{layanan}</Text>
                </TouchableOpacity>
        )
      }

    return (
        <ScrollView>
            <View style={{marginHorizontal:50, marginTop:40,}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:20, flexWrap:'wrap'}}>
                {layanan.map(layanan =>{
          return <Jenis_Dokter layanan={layanan.layanan} key={layanan.id}/>
        })}
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Detail_Dokter({ route, navigation }) {

    const { name, bidang, deskripsi } = route.params;

    return (
        <ScrollView>
            <View style={{flex:1}}>
                <View style={{height:150, marginHorizontal:20, marginTop:10, flexDirection:'row', alignItems:'center'}}>
                    <View style={{height:100,width:100, borderRadius:5, backgroundColor:'#28b87a'}}>
                        <Image source={{uri: `https://i.pravatar.cc/200?u=${name}@pravatar.com`}} style={{height:100,width:100}}/>
                    </View>
                    <View style={{height:100,flex:1,alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:20, color:'black'}}>{name}</Text>
                  <Text style={{fontSize:15, fontWeight:'600', color:'black'}}>{bidang}</Text>
                    </View>
                </View>
                <View style={{height:200,}}>
                    <View style={{backgroundColor:'white',height:200, marginHorizontal:20,borderColor:'white',borderWidth:1}}>
                        <Text style={{marginHorizontal: 10, marginTop:10}}>{deskripsi}</Text>
                    </View>
                </View>
                <View style={{alignItems:'center', marginTop:20}}>
                <TouchableOpacity style={{height:30,width:70, borderRadius:5, backgroundColor:'#28b87a', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold', fontSize:15, color:'white'}}>Pesan</Text>
                </TouchableOpacity>
                </View>
            </View>
            {/* <Text>Nama: {name}</Text>
            <Text>Bidang: {bidang}</Text>
            <Text>Deskripsi: {deskripsi}</Text> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

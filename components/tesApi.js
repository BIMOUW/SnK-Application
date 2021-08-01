import React, { useEffect,useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

export default function tesApi() {

const [dataUser, setDataUser] = useState({
    email:'',
    first_name:'',
    last_name:'',
})    

    useEffect(()=>{
        // fetch('https://reqres.in/api/users/2')
        // .then(response => response.json())
        // .then(json => console.log(json))
        
        // const dataforAPI = {
        //     name:"morphius",
        //     job:"leader"
        // }
        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type':'application/json'
        //     },
        //     body: JSON.stringify(dataforAPI)
        // }) 
        // .then(response => response.json())
        // .then(json => console.log(json))

    },[])

        fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setDataUser(json.data)
        })
    

    return (
        <View>
            <Text>TES API</Text>
            <Text>Response Get Data</Text>
            <Text>Email {`${dataUser.email}`}</Text>
            <Text>First Name : {`${dataUser.first_name}`}</Text>
            <Text>Last Name  :{`${dataUser.last_name}`}</Text>
            <Button title="Post Data"/>
            <Text>Response Post Data</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

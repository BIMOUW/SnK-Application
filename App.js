import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home'
import Jenis_Layanan from './components/Jenis_Layanan'
import List_Dokter from './components/List_Dokter'
import Detail_Dokter from './components/Detail_Dokter';
import tesApi from './components/tesApi';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Jenis Layanan" component={Jenis_Layanan} />
        <Stack.Screen name="List Dokter" component={List_Dokter} />
        <Stack.Screen name="Detail Dokter" component={Detail_Dokter} />
        {/* <Stack.Screen name="tesApi" component={tesApi} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
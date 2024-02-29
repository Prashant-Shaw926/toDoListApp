import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabRouter } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function MainScreen() {
    return (
<Drawer.Navigator>
<Drawer.Screen name='Home' component={'Home'} options={{headerShown: TabRouter}} />
</Drawer.Navigator>
    )
}


const styles = StyleSheet.create({
    ms: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        color: '#121212',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'

const logoTodo = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/img/Vector.png')

export default function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('ManageYourTask')
        }, 3000)
    }, [2]);


    return (
        <View style={styles.spl}>
            <View><Image source={logoTodo} /></View>
            <View><Text style={styles.txt}>toDo</Text></View>
        </View>
    )
}


const styles = StyleSheet.create({
    spl: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        gap: 20,
    },
    txt: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
    },
});
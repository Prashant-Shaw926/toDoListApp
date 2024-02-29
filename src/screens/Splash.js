import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

export default function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('MainScreen')
        }, 3000)
    }, []);


    return (
        <View style={styles.spl}>
            <Text style={styles.txt}>Splash</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    spl: {
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
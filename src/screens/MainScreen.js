import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
const logoImg = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/sort.png')
const profileImg = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/img/pp.png')
const midSectionImg = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/img/checklist.png')


export default function MainScreen({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.navBar}>
                <View><Image style={styles.logoI} source={logoImg} /></View>
                <View><Text style={styles.txt}>Home</Text></View>
                <View><Pressable onPress={() => navigation.navigate('Splash')}><Image style={styles.profile} source={profileImg} /></Pressable></View>
            </View>
            <View style={styles.midSection}>
                <View>
                    <Image style={styles.midSectionImgS} source={midSectionImg} />
                </View>
                <View style={styles.midSectionTxtBox}>
                    <Text style={styles.midSectionTxt1}>What do you want to do today?</Text>
                    <Text style={styles.midSectionTxt2}>Tap + to add your tasks</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#121212'
    },
    navBar: {
        display: 'flex',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logoI: {
        width: 50,
        height: 50,
    },
    txt: {
        color: '#fff',
        fontSize: 24,
    },
    midSection: {
        display: 'flex',
        marginVertical: 100,
        alignItems: 'center',
    },
    midSectionTxtBox: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
    },
    midSectionTxt1: {
        color: '#fff',
        fontSize: 20,
    },
    midSectionTxt2: {
        color: '#fff',
        fontSize: 16,
    },
});
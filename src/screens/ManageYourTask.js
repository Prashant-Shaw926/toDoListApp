import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'

const midSectionImg = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/img/myt-Img.png')

export default function ManageYourTask({navigation}) {
  return (
    <View style={styles.MYTContainer}>
      <View>
        <Pressable onPress={() => navigation.navigate('BottomNavigator')}><Text style={[styles.skipTxt, styles.commonText]}>SKIP</Text></Pressable>
      </View>
      <View style={styles.midSection}>
        <View><Image style={styles.midSectionImgS} source={midSectionImg} /></View>
        <View style={styles.slide}>
          <View style={styles.slideBox1}></View>
          <View style={styles.slideBox2}></View>
          <View style={styles.slideBox3}></View>
        </View>
        <View style={styles.midSectionTxtBox}>
          <View>
            <Text style={styles.midSectionTxtBox1}>Manage your tasks</Text>
          </View>
          <View>
            <Text style={styles.midSectionTxtBox2}>You can easily manage all of your daily tasks in toDo for free</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        {/* <View><Pressable onPress={() => navigation.navigate('Splash')}><Text style={[styles.backTxt, styles.commonText]}>BACK</Text></Pressable></View> */}
        {/* <View><Pressable onPress={()=>navigation.navigate('CreateDailyRoutine')} style={styles.nextBtn}><Text style={styles.nextTxt}>NEXT</Text></Pressable></View> */}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  MYTContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212'
  },
  skipTxt: {
    // Specific properties for 'skipTxt' if needed
  },
  backTxt: {
    // Specific properties for 'backTxt' if needed
  },
  commonText: {
    color: 'gray',
    fontSize: 20,
  },
  midSection: {
    display: 'flex',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  midSectionImgS: {
    // width: 271,
    // height: 296,
  },
  slide: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  slideBox1: {
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 20,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  slideBox2: {
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  slideBox3: {
    borderWidth: 2,
    borderColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  midSectionTxtBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 30,
    marginBottom: 40,
  },
  midSectionTxtBox1: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  midSectionTxtBox2: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 40,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextBtn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#8875FF',
    borderRadius: 5,
  },
  nextTxt: {
    color: '#fff',
    fontSize: 16,
  },
});
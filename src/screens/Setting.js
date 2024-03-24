import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
const backBtnIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/leftBack2.png')
const colorChangeIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/bucket-white.png')
const forwardBtnIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/right.png')
const textIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/text.png')
const languageIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/language.png')
const importIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/import.png')


export default function Setting({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}><Image source={backBtnIcon} /></TouchableOpacity>
        <Text style={styles.txt}>Settings</Text>
        <View></View>
      </View>
      <View style={styles.midSection}>
        <View>
          <TouchableOpacity>
            <View style={styles.reminder}>
              <View style={styles.reminderLeft}>
                <Image source={colorChangeIcon} />
                <Text style={styles.reminderTxt}>Change app color</Text>
              </View>
              <View>
                {/* <ToggleSwitch
              isOn={toggle3}
              onColor="#3eb489"
              offColor="#f88379"
              labelStyle={{ color: "black", fontWeight: "900" }}
              onToggle={handleToggleNoti}
            /> */}
                <View><Image source={forwardBtnIcon} /></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.reminder}>
              <View style={styles.reminderLeft}>
                <Image source={textIcon} />
                <Text style={styles.reminderTxt}>Change app typography</Text>
              </View>
              <View>
                {/* <ToggleSwitch
              isOn={toggle3}
              onColor="#3eb489"
              offColor="#f88379"
              labelStyle={{ color: "black", fontWeight: "900" }}
              onToggle={handleToggleNoti}
            /> */}
                <View><Image source={forwardBtnIcon} /></View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.reminder}>
              <View style={styles.reminderLeft}>
                <Image source={languageIcon} />
                <Text style={styles.reminderTxt}>Change app language</Text>
              </View>
              <View>
                {/* <ToggleSwitch
              isOn={toggle3}
              onColor="#3eb489"
              offColor="#f88379"
              labelStyle={{ color: "black", fontWeight: "900" }}
              onToggle={handleToggleNoti}
            /> */}
                <View><Image source={forwardBtnIcon} /></View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.importSection}>
          <View>
            <Text style={styles.importSectionTitle}>Import</Text>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.reminder}>
                <View style={styles.reminderLeft}>
                  <Image source={importIcon} />
                  <Text style={styles.reminderTxt}>Import from Google calendar</Text>
                </View>
                <View>
                  {/* <ToggleSwitch
              isOn={toggle3}
              onColor="#3eb489"
              offColor="#f88379"
              labelStyle={{ color: "black", fontWeight: "900" }}
              onToggle={handleToggleNoti}
            /> */}
                  <View><Image source={forwardBtnIcon} /></View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
    // alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txt: {
    color: '#fff',
    fontSize: 20,
  },
  midSection: {
    paddingVertical: '5%',
    gap: 20,
  },
  reminder: {
    paddingVertical: '3.5%',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#fff'
  },
  reminderLeft: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  reminderTxt: {
    color: '#fff',
    fontSize: 20,
  },
  importSection: {
    gap: 10,
  },
  importSectionTitle: {
    color: '#fff',
    fontSize: 18
  },
});
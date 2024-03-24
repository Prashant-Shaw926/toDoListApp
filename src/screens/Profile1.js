// import ToggleSwitch from 'toggle-switch-react-native'
// import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native'
// import React, { useState } from 'react'
// const profileImg = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/img/pp.png')
// import MainScreen from './MainScreen'
// import Setting from './Setting'
// const Remaining = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/remaining.png')
// const Completed = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/checked.png')
// const Notification = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/bell.png')
// const darkMode = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/nightMode.png')
// const Reminder = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/alarm-clock.png')

// const Profile = ({ navigation }) => {

//     const [toggle1, setToggle1] = useState(false)
//     const [toggle2, setToggle2] = useState(false)
//     const [toggle3, setToggle3] = useState(false)

//     const handleToggleDark = () => {
//         setToggle1(prevState => !prevState)
//         Alert.alert(toggle1 === true ? 'Dark mode is turned off' : 'Dark mode is turned on');
//     }
//     const handleToggleRem = () => {
//         setToggle2(prevState => !prevState)
//         Alert.alert(toggle2 === true ? 'Reminder is turned off' : 'Reminder is turned on');
//     }
//     const handleToggleNoti = () => {
//         setToggle3(prevState => !prevState)
//         Alert.alert(toggle3 === true ? 'Notifications is turned off' : 'Notifications is turned on');
//     }

//     return (
//         <View style={styles.mainContainer}>
//             <View style={styles.navBar}>

//                 <View style={styles.header}>
//                     <Pressable onPress={() => navigation.navigate('Home')}><Text style={styles.title}>Back</Text></Pressable>
//                     <Text style={styles.title}>Profile</Text>
//                     <Pressable onPress={() => navigation.navigate('Setting')}><Text style={styles.title}>Setting</Text></Pressable>
//                 </View>
//                 <View style={styles.subHeader}>
//                     <Image style={{ width: 80, height: 80 }} source={profileImg} />
//                     <Text style={styles.subHeaderTxt}>Micheal Shawn</Text>
//                 </View>

//             </View>
//             <View style={styles.midSection}>
//                 <View style={styles.midSectionInside}>
//                     <View style={styles.taskRem}>
//                         <View>
//                             <Image source={Remaining} />
//                         </View>
//                         <View>
//                             <Text style={styles.taskRemTxt}>
//                                 Task Pending
//                             </Text>
//                             <Text style={styles.taskRemTxt}>57</Text>
//                         </View>
//                     </View>
//                     <View style={styles.taskCom}>
//                         <View>
//                             <Image source={Completed} />
//                         </View>
//                         <View>
//                             <Text style={styles.taskRemTxt}>
//                                 Task Completed
//                             </Text>
//                             <Text style={styles.taskRemTxt}>57</Text>
//                         </View>
//                     </View>
//                     <View style={styles.reminder}>
//                         <View style={styles.reminderLeft}>
//                             <Image source={darkMode} />
//                             <Text style={styles.reminderTxt}>Dark Mode</Text>
//                         </View>
//                         <View>
//                             <ToggleSwitch
//                                 isOn={toggle1}
//                                 onColor="#3eb489"
//                                 offColor="#f88379"
//                                 labelStyle={{ color: "black", fontWeight: "900" }}
//                                 onToggle={handleToggleDark}
//                             />
//                         </View>
//                     </View>
//                     <View style={styles.reminder}>
//                         <View style={styles.reminderLeft}>
//                             <Image source={Reminder} />
//                             <Text style={styles.reminderTxt}>Reminder</Text>
//                         </View>
//                         <View>
//                             <ToggleSwitch
//                                 isOn={toggle2}
//                                 onColor="#3eb489"
//                                 offColor="#f88379"
//                                 labelStyle={{ color: "black", fontWeight: "900" }}
//                                 onToggle={handleToggleRem}
//                             />
//                         </View>
//                     </View>
//                     <View style={styles.reminder}>
//                         <View style={styles.reminderLeft}>
//                             <Image source={Notification} />
//                             <Text style={styles.reminderTxt}>Notifications</Text>
//                         </View>
//                         <View>
//                             <ToggleSwitch
//                                 isOn={toggle3}
//                                 onColor="#3eb489"
//                                 offColor="#f88379"
//                                 labelStyle={{ color: "black", fontWeight: "900" }}
//                                 onToggle={handleToggleNoti}
//                             />
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default Profile

// const styles = StyleSheet.create({
//     mainContainer: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     navBar: {
//         backgroundColor: '#121212',
//         display: 'flex',
//         height: '28%',
//         backgroundColor: '#fff',
//     },
//     title: {
//         color: '#000',
//         fontSize: 20,
//     },
//     header: {
//         margin: 20,
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     subHeader: {
//         marginTop: 10,
//         display: 'flex',
//         alignItems: 'center',
//         gap: 10,
//     },
//     subHeaderTxt: {
//         fontSize: 20,
//         color: '#000',
//     },
//     midSection: {
//         margin: 10,
//         padding: '5%',
//         backgroundColor: '#fff',
//         flex: 1,
//         borderRadius: 30,
//         backgroundColor: '#121212'
//     },
//     midSectionInside: {
//         display: 'flex',
//         gap: 10,
//         // flexDirection: 'row',
//         // justifyContent: 'space-between',
//     },
//     taskRem: {
//         display: 'flex',
//         flexDirection: 'row',
//         gap: 20,
//         padding: '5%',
//         borderRadius: 20,
//         backgroundColor: '#3eb489',
//         alignItems: 'center',
//     },
//     taskCom: {
//         display: 'flex',
//         flexDirection: 'row',
//         gap: 20,
//         padding: '5%',
//         borderRadius: 20,
//         backgroundColor: '#3eb489',
//         alignItems: 'center',
//     },
//     taskRemTxt: {
//         color: '#fff',
//     },
//     taskComTxt: {
//         color: '#fff',
//     },
//     reminder: {
//         padding: '3.5%',
//         borderRadius: 20,
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         backgroundColor: '#fff'
//     },
//     reminderLeft: {
//         display: 'flex',
//         flexDirection: 'row',
//         gap: 15,
//         alignItems: 'center',
//     },
//     reminderTxt: {

//     },
// });
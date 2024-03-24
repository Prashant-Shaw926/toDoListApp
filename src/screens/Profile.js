import ToggleSwitch from 'toggle-switch-react-native'
import { View, Text, StyleSheet, Image, Pressable, Alert, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
const profileImg = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/img/pp.png')
import MainScreen from './MainScreen'
import Modal from "react-native-modal";
import Setting from './Setting'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import { shadow } from 'react-native-paper'
const myIcon = <Icon name="rocket" size={30} color="#900" />;
const myIcon1 = <Icon name="comments" size={30} color="#900" />;
const Remaining = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/remaining.png')
const Completed = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/checked.png')
const Notification = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/bell.png')
const darkMode = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/nightMode.png')
const Reminder = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/alarm-clock.png')
const backBtnIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/leftBack2.png')
const settingIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/setting-white.png')
const forwardBtnIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/right.png')
const userIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/user.png')
const passwordIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/key.png')
const cameraIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/camera.png')
const aboutIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/about.png')
const supportIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/support.png')
const faqIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/faq.png')
const likeIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/like.png')
const logoutIcon = require('/Users/Prashant/projects/RNFirstProject/RNNewProject/assets/icons/logout.png')


const Profile = ({ navigation }) => {

    const [visibleName, setVisibleName] = useState(false);
    const [visiblePass, setVisiblePass] = useState(false);
    const [visibleImg, setVisibleImg] = useState(false);
    const [nameValue, setNameValue] = useState('');
    const [accountName, setAccountName] = useState([])
    const [passValue, setPassValue] = useState('');
    const [password, setPassword] = useState([])

    const accountNameHandle = () => {
        if (nameValue != '') {
            setAccountName(nameValue)
            setNameValue('')
        }
        else (
            setVisibleName(false)
        )
    }
    const passwordHandle = () => {
        if (passValue != '') {
            setPassword(passValue)
            setPassValue('')
        }
        else (
            setVisiblePass(false)
        )
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}><Image source={backBtnIcon} /></TouchableOpacity>
                <Text style={styles.profileTxt}>Profile</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}><Image source={settingIcon} /></TouchableOpacity>
            </View>
            <View style={styles.profileSection}>
                <Image style={{ width: 70, height: 70 }} source={profileImg} />
                <Text style={styles.profileTxt}>{accountName}</Text>
            </View>
            <View style={styles.taskInfoBox}>
                <View style={styles.taskPendingBox}>
                    <Image width={50} source={Remaining} />
                    <Text style={styles.taskInfoBoxTxt}>10 Task pending</Text>
                </View>
                <View style={styles.taskCompletedBox}>
                    <View style={styles.taskCompletedBox}>
                        <Image width={50} source={Completed} />
                        <Text style={styles.taskInfoBoxTxt}>10 Task completed</Text>
                    </View>
                </View>
            </View>
            <View style={styles.importSection}>
                <View>
                    <Text style={styles.importSectionTitle}>Account</Text>
                </View>

                <View>
                    <TouchableOpacity onPress={() => setVisibleName(true)}>
                        <View style={styles.settingBox}>
                            <View style={styles.settingBoxInside}>
                                <Image source={userIcon} />
                                <Text style={styles.settingBoxInsideTxt}>Change account name</Text>
                            </View>
                            <View>
                                <View><Image source={forwardBtnIcon} /></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setVisiblePass(true)}>
                        <View style={styles.settingBox}>
                            <View style={styles.settingBoxInside}>
                                <Image source={passwordIcon} />
                                <Text style={styles.settingBoxInsideTxt}>Change account password</Text>
                            </View>
                            <View>
                                <View><Image source={forwardBtnIcon} /></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => setVisibleImg(true)}>
                        <View style={styles.settingBox}>
                            <View style={styles.settingBoxInside}>
                                <Image source={cameraIcon} />
                                <Text style={styles.settingBoxInsideTxt}>Change account Image</Text>
                            </View>
                            <View>
                                <View><Image source={forwardBtnIcon} /></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={styles.importSection}>
                    <View>
                        <Text style={styles.importSectionTitle}>Setting</Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                            <View style={styles.settingBox}>
                                <View style={styles.settingBoxInside}>
                                    <Image source={settingIcon} />
                                    <Text style={styles.settingBoxInsideTxt}>App Setting</Text>
                                </View>
                                <View>
                                    <View><Image source={forwardBtnIcon} /></View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
                <View style={styles.importSection}>
                    <View>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={styles.settingBox}>
                                <View style={styles.settingBoxInside}>
                                    <Image source={supportIcon} />
                                    <Text style={styles.settingBoxInsideTxt}>Contact Us</Text>
                                </View>
                                <View>
                                    <View><Image source={forwardBtnIcon} /></View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <View style={styles.settingBox}>
                                <View style={styles.settingBoxInside}>
                                    <Image source={aboutIcon} />
                                    <Text style={styles.settingBoxInsideTxt}>About</Text>
                                </View>
                                <View>
                                    <View><Image source={forwardBtnIcon} /></View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
                            <View style={styles.settingBox}>
                                <View style={styles.settingBoxInside}>
                                    <Image source={logoutIcon} />
                                    <Text style={{ color: '#f88379', fontSize: 16 }}>Logout</Text>
                                </View>
                                <View>
                                    <View><Image source={forwardBtnIcon} /></View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
            <Modal style={styles.bottomSheetBox} isVisible={visibleName} onBackButtonPress={() => { setVisibleName(false) }}>
                <View style={styles.bottomSheet}>
                    <View style={styles.bottomSheetHeader}>
                        <Text>Change account name</Text>
                    </View>
                    <View>
                        <TextInput value={nameValue} onChangeText={setNameValue} placeholder='Enter new account name' style={styles.accountNameInput} />
                    </View>
                    <View style={styles.btnBoxAcc}>
                        <TouchableOpacity onPress={() => setVisibleName(false)} style={styles.cancelBtn}><Text style={styles.nextTxt}>Cancel</Text></TouchableOpacity>
                        <TouchableOpacity onPress={accountNameHandle} style={styles.changeBtn}>
                            <Text style={styles.nextTxt}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal style={styles.bottomSheetBox} isVisible={visiblePass} onBackButtonPress={() => { setVisiblePass(false) }}>
                <View style={styles.bottomSheet}>
                    <View style={styles.bottomSheetHeader}>
                        <Text>Change password</Text>
                    </View>
                    <View>
                        <TextInput placeholder='Enter old password' style={styles.accountNameInput} />
                        <TextInput value={passValue} onChange={(e) => setPassValue(e.target.value)} placeholder='Enter new password' style={styles.accountNameInput} />
                    </View>
                    <View style={styles.btnBoxPass}>
                        <TouchableOpacity onPress={() => setVisiblePass(false)} style={styles.cancelBtn}><Text style={styles.nextTxt}>Cancel</Text></TouchableOpacity>
                        <TouchableOpacity onPress={passwordHandle} style={styles.changeBtn}>
                            <Text style={styles.nextTxt}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal style={styles.bottomSheetBox} isVisible={visibleImg} onBackButtonPress={() => { setVisibleImg(false) }}>
                <View style={styles.bottomSheet}>
                    <View style={styles.bottomSheetHeader}>
                        <Text>Change account image</Text>
                    </View>
                    <View style={styles.btnBoxImg}>
                        <TouchableOpacity style={styles.btnImg}><Text style={styles.btnBoxImgTxt}>Take picture</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btnImg}><Text style={styles.btnBoxImgTxt}>Import from gallery</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.btnImg}><Text style={styles.btnBoxImgTxt}>Import from Google Drive</Text></TouchableOpacity>
                    </View>
                    {/* <View style={styles.btnBox}>
                        <TouchableOpacity onPress={() => setVisiblePass(false)} style={styles.cancelBtn}><Text style={styles.nextTxt}>Cancel</Text></TouchableOpacity>
                        <TouchableOpacity onPress={passwordHandle} style={styles.changeBtn}>
                            <Text style={styles.nextTxt}>Change</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </Modal>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        gap: 20,
        backgroundColor: '#121212',
    },
    backTxt: {
        color: '#fff',
        fontSize: 20,
    },
    profileSection: {
        alignItems: 'center',
        gap: 10,
    },
    profileTxt: {
        color: '#fff',
        fontSize: 20,
    },
    settingTxt: {
        color: '#fff',
        fontSize: 20,
    },
    header: {
        // margin: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    taskInfoBox: {
        // display: 'flex',
        // alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        // gap: 20,
    },
    taskPendingBox: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        height: 80,
        width: 150,
        borderRadius: 5,
        backgroundColor: '#363636',
    },
    taskCompletedBox: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        height: 80,
        width: 150,
        borderRadius: 5,
        backgroundColor: '#363636',
    },
    importSection: {
        gap: 10,
    },
    importSectionTitle: {
        color: '#fff',
        fontSize: 16,
    },
    settingBox: {
        // paddingVertical: '3.5%', 
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    settingBoxInside: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    settingBoxInsideTxt: {
        color: '#fff',
        fontSize: 16,
    },
    taskInfoBoxTxt: {
        color: '#fff'
    },
    bottomSheetBox: {
        // backgroundColor: '#121212',
        width: '100%',
        marginLeft: 0,
        marginBottom: 30,
    },
    bottomSheet: {
        // backgroundColor: '#121212',
        flex: 1,
        position: 'absolute',
        bottom: 0,
        // height: '70%',
        gap: 10,
        width: '100%',
        padding: '5%',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    accountNameInput: {
        paddingHorizontal: 10,
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 5,
    },
    accountNameInput: {
        paddingHorizontal: 10,
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 5,
    },
    bottomSheetHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#121212',
    },
    changeBtn: {
        width: 150,
        height: 43,
        alignItems: 'center',
        backgroundColor: '#8875FF',
        borderRadius: 5,
        justifyContent: 'center'
    },
    cancelBtn: {
        width: 150,
        height: 43,
        alignItems: 'center',
        backgroundColor: '#8875FF',
        borderRadius: 5,
        justifyContent: 'center'
    },
    nextTxt: {
        color: '#fff',
        fontSize: 16,
    },
    btnBoxAcc: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnBoxPass: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnBoxImg: {
        display: 'flex',
        gap: 10,
    },
    btnImg: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 2, // Adjusted elevation for a more subtle shadow
        shadowColor: '#000',
        shadowOpacity: 0.1, // Reduced opacity for a more subtle shadow
        shadowRadius: 2, // Reduced radius for a more subtle shadow
        shadowOffset: {
          width: 0,
          height: 1,
        },
    },
    btnBoxImgTxt: {
        fontSize: 16,
    }
});
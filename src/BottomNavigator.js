import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Setting from './screens/Setting';
import MainScreen from './screens/MainScreen'

const homeScreenIcon = require('../assets/icons/home.png');
const settingIcon = require('../assets/icons/setting.png')

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    height: 50,
                },
            }}
        >
            {/* <Tab.Screen name='Home' component={MainScreen} options={{ headerShown: false }} /> */}
            <Tab.Screen name='Home' component={MainScreen} options={{ headerShown: false,  focusedIcon: 'home' }} />
            <Tab.Screen name='Setting' component={Setting} options={{ headerShown: false }} />
            {/* <Tab.Screen name='Home' component={MainScreen} options={{
                headerShown: false, tabBarIcon: ({ focused }) => {
                    <View>
                        <Image source={homeScreenIcon} />
                        <Text>HOME</Text>
                    </View>
                }
            }} />
            <Tab.Screen name='Setting' component={Setting} options={{
                headerShown: false, tabBarIcon: ({ focused }) => {
                    <View>
                        <Image source={settingIcon} />
                        <Text>SETTING</Text>
                    </View>
                }
            }} /> */}
        </Tab.Navigator>

    )
}
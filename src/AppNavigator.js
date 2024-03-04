import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from './screens/Splash';
import ManageYourTask from './screens/ManageYourTask';
import MainScreen from './screens/MainScreen';
import CreateDailyRoutine from './screens/CreateDailyRoutine'
import OrganizeYourTasks from './screens/OrganizeYourTasks'
import BottomNavigator from './BottomNavigator';


const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name='ManageYourTask' component={ManageYourTask} options={{ headerShown: false }} />
                <Stack.Screen name='CreateDailyRoutine' component={CreateDailyRoutine} options={{ headerShown: false }} />
                <Stack.Screen name='OrganizeYourTasks' component={OrganizeYourTasks} options={{ headerShown: false }} />
                <Stack.Screen name='MainScreen' component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name='BottomNavigator' component={BottomNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from './BottomTabs';
import SplashScreen from '../Screens/SplashScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    cardStyle: { backgroundColor: "white" },
                    headerShown: false, // Set the background color here and remove header
                }}

            >
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Main" component={BottomTabs} />





            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
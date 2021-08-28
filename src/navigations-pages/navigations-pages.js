import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../pages/MainPage';
import InternetPackagesPage from '../pages/InternetPackagesPage';

const Stack = createStackNavigator()

export default class NavigationPages extends Component {
    
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="main-page" component={MainPage} options={{headerShown: false}} />
                    <Stack.Screen name="internet-packages" component={InternetPackagesPage} options={{headerStatusBarHeight: 40}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
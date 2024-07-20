import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Homepage from '../screens/Homepage'
import App from '../App'



export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='appNavigation'>
        <Stack.Screen name="Navigation" options={{headerShown:false}} component={appNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
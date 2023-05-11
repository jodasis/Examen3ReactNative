import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';

const Stack = createStackNavigator();

export default function NavigationStack() {
    return (
      <Stack.Navigator initialRouteName="Third">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    )
  }
import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {

    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Second" component={SecondScreen} />
        <Drawer.Screen name="Third" component={ThirdScreen} />
      </Drawer.Navigator>
    )
  }
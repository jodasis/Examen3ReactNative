import { View, Text, Button } from 'react-native'
import React from 'react'

export default function ThirdScreen(props) {
    const{navigation} = props;
        
    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }
  return (
    <View>
      <Text>ThirdScreen</Text>
      <Button onPress={()=>goToPage("Home")} title="Go to Home" ></Button>
    </View>
  )
}
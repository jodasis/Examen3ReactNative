import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SecondScreen(props) {
    const{navigation} = props;
        
    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }
  return (
    <View>
      <Text>SecondScreen</Text>
      <Button onPress={()=>goToPage("Third")} title="Go to Third" ></Button>
    </View>
  )
}
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";


const TabButton = ({ text, currentTab, setCurrentTab }) => (
  <TouchableOpacity onPress={() => setCurrentTab(text)} style={{
    backgroundColor: currentTab === text ? 'black' : 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 99,
    marginRight: 10
  }}>
    <Text style={{
      color: currentTab === text ? 'white' : 'black',
      fontSize: 16,
      fontWeight: 'bold'
    }}>{text}</Text>
  </TouchableOpacity>
)



export default function HeaderTabs ({ currentTab, setCurrentTab }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
    }}>
      <TabButton text="Delivery" currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <TabButton text="Pickup" currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </View>
  )
}


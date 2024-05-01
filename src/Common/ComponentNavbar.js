import { View, Text, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const ComponentNavbar = ({text}) => {
    const navigation=useNavigation();

  return (
    <View
      style={{
        paddingVertical: 22,
      }}
    >
      <View
        style={{
          paddingVertical: 12,
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <TouchableWithoutFeedback
   
        >
          <Image
            source={require('../assets/Group 33678.png')}
          />
        </TouchableWithoutFeedback>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#322068'
          }}
        >
          {text}
          </Text>

        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('profile')
        }}
        >
          <Image
            source={require('../assets/profile.png')}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default ComponentNavbar
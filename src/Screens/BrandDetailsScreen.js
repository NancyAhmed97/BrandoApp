import { View, Text } from 'react-native'
import React from 'react'
import ComponentNavbar from '../Common/ComponentNavbar'

const BrandDetailsScreen = ({route}) => {
  const id=route.params.id
  const name=route.params.name
  return (
    <View
    style={{
      backgroundColor:'#FDFDFD',
      flex:1,
      paddingHorizontal:22
    }}
    >
      <ComponentNavbar
      text={name}
      />
      <Text>BrandDetailsScreen</Text>
    </View>
  )
}

export default BrandDetailsScreen
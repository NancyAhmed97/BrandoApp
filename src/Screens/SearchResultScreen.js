import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import CommonHeader from '../Common/CommonHeader'

const SearchResultScreen = () => {
  return (
    <View
      style={{
        paddingVertical: Dimensions.get('screen').height / 20,
        paddingHorizontal: Dimensions.get('screen').height / 38,
        flex: 1,
      }}
    >
      <CommonHeader
        headerState={'Search'}
      />
      <Text>Categories</Text>
    </View>
  )
}

export default SearchResultScreen
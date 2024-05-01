import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import CommonHeader from '../Common/CommonHeader'

const TermsAndConditionScreen = () => {
  return (
    <View
    style={{
        paddingVertical: Dimensions.get('screen').height / 20,
        paddingHorizontal: Dimensions.get('screen').height / 38,
        flex: 1,

    }}
>
    <CommonHeader
        headerState="Terms and ConditionScreen"
    />
    <ScrollView
        style={{
            paddingHorizontal: Dimensions.get('screen').width / 20,
            paddingVertical: Dimensions.get('screen').width / 35,
            backgroundColor: '#fff',
            borderRadius: 20,
            shadowColor: '#171717',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,

        }}

    >
        <Text>fldfldfk</Text>
    </ScrollView>

</View>
  )
}

export default TermsAndConditionScreen
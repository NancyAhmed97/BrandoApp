import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../Constants/Colors';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const MainHeader = () => {
  const userinfo = useSelector((state) => state);
  const navigation=useNavigation();
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 12,

        backgroundColor: Colors.secondry,
        paddingTop: Dimensions.get('screen').height / 17,
        paddingBottom: Dimensions.get('screen').height / 35

      }}
      onPress={()=>{navigation.navigate('profile')}}

    >
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        <View
          style={{
            marginRight: 7,
            width:Dimensions.get('screen').width/8,
            height:Dimensions.get('screen').width/8,
            borderRadius:'50%',
            justifyContent:'center',
            alignItems:'center',
            borderWidth:5,
            borderColor:Colors.primary
          }}
        >
<Text
style={{
  color:'#fff',
  fontWeight:'800'
}}
>NA</Text>
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff"
            }}
          >
            Hello , Nancy
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "#fff",
              marginTop: 5
            }}
          >
            nancy@gmail.com
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MainHeader